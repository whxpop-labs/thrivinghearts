"use strict";
/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    packageName;
    debugEnabled;
    constructor(packageName, debugEnabled) {
        this.packageName = packageName || "package";
        this.debugEnabled = debugEnabled;
    }
    /**
     * Converts the given message to JSON format if it's an object.
     * @param msg The message to convert.
     * @returns The converted message.
     */
    jsonConvert(msg) {
        if (typeof msg === 'object') {
            return JSON.stringify(msg);
        }
        else {
            return msg.toString();
        }
    }
    /**
     * Logs a debug message.
     * @param message The message to log.
     */
    debug(message) {
        if (!this.debugEnabled)
            return;
        console.log(`(debug 🐛) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }
    /**
     * Logs an info message.
     * @param message The message to log.
     */
    info(message) {
        console.log(`(info ℹ️ ) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }
    /**
     * Logs a warning message.
     * @param message The message to log.
     */
    warn(message) {
        console.warn(`(warn ⚠️ ) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }
    /**
     * Logs an error message.
     * @param message The message to log.
     */
    error(message) {
        console.error(`(error ❌) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }
}
exports.Logger = Logger;
