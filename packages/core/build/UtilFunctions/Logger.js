"use strict";
/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigLoader_1 = require("./ConfigLoader");
function Log(info) {
    switch (info.logLevel) {
        case "debug":
            if (ConfigLoader_1.config.logLevel !== "debug")
                return;
            console.log(`(debug 🐛) @${info.packageName}: ${info.message} `);
        case "info":
            if (ConfigLoader_1.config.logLevel !== "info")
                return;
            console.log(`(info ℹ️) @${info.packageName}: ${info.message} `);
    }
}
Log({ packageName: 'doodley/core', message: 'test', logLevel: "info" });
