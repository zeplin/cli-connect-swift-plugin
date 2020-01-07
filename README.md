# Zeplin CLI Swift Plugin

[Zeplin CLI](https://github.com/zeplin/cli) plugin to generate descriptions and code snippets for Swift components.

## Installation

Install the plugin using npm.

```sh
npm install -g @zeplin/cli-connect-swift-plugin
```

### SourceKitten

[SourceKitten](https://github.com/jpsim/SourceKitten#installation) is required to be installed on the running environment, please check its documentation for installation instructions.

## Usage

Run CLI `connect` command using the plugin.

```sh
zeplin connect -p @zeplin/cli-connect-swift-plugin
```

## About Connected Components

[Connected Components](https://blog.zeplin.io/introducing-connected-components-components-in-design-and-code-in-harmony-aa894ed5bd95) in Zeplin lets you access components in your codebase directly on designs in Zeplin, with links to Storybook, GitHub and any other source of documentation based on your workflow. 🧩

[Zeplin CLI](https://github.com/zeplin/cli) uses plugins like this one to analyze component source code and publishes a high-level overview to be displayed in Zeplin.
