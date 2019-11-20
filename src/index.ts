/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConnectPlugin, ComponentConfig, ComponentData, PrismLang } from "@zeplin/cli";
import path from "path";
import pug from "pug";
import { exec } from "child-process-es6-promise";

interface Component {
    componentName: string;
    methodName: string;
    props: PropItem[];
}

interface PropItem {
    name: string;
    type: string;
}

export default class implements ConnectPlugin {
    supportedFileExtensions = [".swift"];

    generateSnippet = pug.compileFile(path.join(__dirname, "template/snippet.pug"));

    async process(context: ComponentConfig): Promise<ComponentData> {
        await this.checkSourcekittenExists();

        const components = await this.extractComponents(context.path);

        const description = await this.getComponentDescription(context.path);

        const snippet = this.generateSnippet({ components });

        return { snippet, lang: PrismLang.Swift, description };
    }

    supports(x: ComponentConfig): boolean {
        const fileExtension = path.extname(x.path);

        return this.supportedFileExtensions.includes(fileExtension);
    }

    private async checkSourcekittenExists(): Promise<void> {
        try {
            await exec("sourcekitten version");
        } catch (error) {
            throw new Error("sourcekitten binary could not be found.\n" +
                "Installation instructions: https://github.com/jpsim/SourceKitten#installation");
        }
    }

    private async getComponentDescription(filePath: string): Promise<string> {
        try {
            const { stdout: jsonString } = await exec(`sourcekitten doc --single-file "${filePath}"`);
            const doc = JSON.parse(jsonString);

            const file = doc[path.resolve(filePath)];

            const classDoc = [...file["key.substructure"]]
                .find((e: any) => e["key.kind"] === "source.lang.swift.decl.class");

            return classDoc["key.doc.comment"];
        } catch (error) {
            const err = new Error(`Could not parse component description on ${filePath}`);
            err.stack = error.stack;
            throw err;
        }
    }

    private async extractComponents(filePath: string): Promise<Component[]> {
        try {
            const { stdout: jsonString } = await exec(`sourcekitten structure --file "${filePath}"`);
            const syntaxTree = JSON.parse(jsonString);

            const classDefinition = [...syntaxTree["key.substructure"]]
                .find((e: any) => e["key.kind"] === "source.lang.swift.decl.class");

            const methodName = "init";
            const componentName = classDefinition["key.name"];

            const components: Component[] = [];

            classDefinition["key.substructure"]
                .filter((e: any) => e["key.kind"] === "source.lang.swift.decl.function.method.instance")
                .filter((e: any) => e["key.name"].startsWith(methodName))
                .filter((m: any) =>
                    !(m["key.substructure"].find(
                        (a: { [x: string]: string }) => a["key.typename"] === "NSCoder")
                    )
                )
                .forEach((methodSignature: any) => {
                    const props: PropItem[] = [];

                    [...methodSignature["key.substructure"]]
                        .filter((e: any) => e["key.kind"] === "source.lang.swift.decl.var.parameter")
                        .forEach((e: any) => props.push({ name: e["key.name"], type: e["key.typename"] }));

                    components.push({
                        componentName,
                        methodName,
                        props
                    });
                });

            return components;
        } catch (error) {
            const err = new Error(`Could not generate snippet on ${filePath}`);
            err.stack = error.stack;
            throw err;
        }
    }
}