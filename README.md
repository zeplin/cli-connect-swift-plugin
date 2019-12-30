# Zeplin CLI Connected Components - Swift Plugin

This plugin provides a processor to gather code snippets and descriptions from Swift components.

## Usage

Install this package along with @zeplin/cli npm package

```
npm install -g @zeplin/cli @zeplin/cli-connect-swift-plugin
```

Execute connect command on Zeplin CLI using -p option to include the plugin into the connect operation.
```
zeplin connect -p @zeplin/cli-connect-swift-plugin
```

## Dependencies

[SourceKitten](https://github.com/jpsim/SourceKitten) is required to be installed on the environment.