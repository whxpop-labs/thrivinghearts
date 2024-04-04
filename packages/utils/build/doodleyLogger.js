"use strict";
/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const configLoader_1 = require("./configLoader");
/**
 * Converts the given message to JSON format if it's an object.
 * @param msg The message to convert.
 * @returns The converted message.
 */
function jsonConvert(msg) {
    if (typeof msg === 'object') {
        return JSON.stringify(msg);
    }
    else {
        return msg.toString();
    }
}
var logger;
(function (logger) {
    /**
     * Logs a debug message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function debug(message, packageName) {
        if (configLoader_1.config.logLevel !== "debug")
            return;
        console.log(`(debug 🐛) @${packageName || "package"}: ${jsonConvert(message)} `);
    }
    logger.debug = debug;
    /**
     * Logs an info message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function info(message, packageName) {
        console.log(`(info ℹ️ ) @${packageName || "package"}: ${message} `);
    }
    logger.info = info;
    /**
     * Logs a warning message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function warn(message, packageName) {
        console.warn(`(warn ⚠️ ) @${packageName || "package"}: ${message} `);
    }
    logger.warn = warn;
    /**
     * Logs an error message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function error(message, packageName) {
        console.error(`(error ❌) @${packageName || "package"}: ${message} `);
    }
    logger.error = error;
})(logger || (exports.logger = logger = {}));
