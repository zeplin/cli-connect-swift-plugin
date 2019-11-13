import Plugin from "../src";

describe("Connected Components - Swift Plugin", () => {
    test("Button.swift snippet creation", async () => {
        const plugin = new Plugin();

        const componentCode = await plugin.process({ path: "test/Button.swift", zeplinNames: [] });

        expect(componentCode).toMatchSnapshot();
    });

    test("Card.swift snippet creation", async () => {
        const plugin = new Plugin();

        const componentCode = await plugin.process({ path: "test/Card.swift", zeplinNames: [] });

        expect(componentCode).toMatchSnapshot();
    });
});
