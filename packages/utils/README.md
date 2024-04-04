# @doodley/utils

A package containing all utility functions used by the DoodleyProject.

## Installation

@doodley/utils is installed via NPM with the following command:

```bash
npm install @doodley/utils
```

## Avaliable Functions

### Config

| Export | Function |
|---|---|
| `config` | Is a JSON containing project Doodley config |
| `loadConfig(filePath)` | Loads a custom config file if in a different location from normal |

### Logging

| Export | Function |
|---|---|
| `logger` | Is the parent object that houses all log types |
| `logger.debug(message, packageName)` | Sends a debug message to the console |
| `logger.info(message, packageName)` | Sends a info/log message to the console |
| `logger.warn(message, packageName)` | Sends a warning to the console |
| `logger.error(message, packageName)` | Sends a error to the console |
