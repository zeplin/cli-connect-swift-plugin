# Zeplin CLI Swift Plugin

[Zeplin CLI](https://github.com/zeplin/cli) plugin to generate descriptions and code snippets for Swift components.

## Installation

Install the plugin using npm.

```sh
npm install -g @zeplin/cli-connect-swift-plugin
```

Zeplin CLI Swift Plugin uses [SourceKitten](https://github.com/jpsim/SourceKitten) to analyze and collect information from Swift files. Install it by following the instructions.

[SourceKitten installation instructions](https://github.com/jpsim/SourceKitten#installation)

## Usage

Run CLI `connect` command using the plugin.

```sh
zeplin connect -p @zeplin/cli-connect-swift-plugin
```

_<TODO: Describe what types of Swift classes are supported with examples.>_

## About Connected Components

[Connected Components](https://blog.zeplin.io/introducing-connected-components-components-in-design-and-code-in-harmony-aa894ed5bd95) in Zeplin lets you access components in your codebase directly on designs in Zeplin, with links to Storybook, GitHub and any other source of documentation based on your workflow. 🧩

[Zeplin CLI](https://github.com/zeplin/cli) uses plugins like this one to analyze component source code and publishes a high-level overview to be displayed in Zeplin.
