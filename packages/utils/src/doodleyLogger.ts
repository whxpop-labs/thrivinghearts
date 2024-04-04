/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */

import { config } from "./configLoader";

/**
 * Converts the given message to JSON format if it's an object.
 * @param msg The message to convert.
 * @returns The converted message.
 */
function jsonConvert(msg: any): string {
    if (typeof msg === 'object') {
        return JSON.stringify(msg);
    } else {
        return msg.toString();
    }
}


export module logger {
    /**
     * Logs a debug message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    export function debug(message: any, packageName?: string): void {
        if (config.logLevel !== "debug") return;
        console.log(`(debug 🐛) @${packageName || "package"}: ${jsonConvert(message)} `);
    }

    /**
     * Logs an info message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    export function info(message: string, packageName?: string): void {
        console.log(`(info ℹ️ ) @${packageName || "package"}: ${message} `);
    }

    /**
     * Logs a warning message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    export function warn(message: string, packageName?: string): void {
        console.warn(`(warn ⚠️ ) @${packageName || "package"}: ${message} `);
    }

    /**
     * Logs an error message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    export function error(message: string, packageName?: string): void {
        console.error(`(error ❌) @${packageName || "package"}: ${message} `);
    }
}
