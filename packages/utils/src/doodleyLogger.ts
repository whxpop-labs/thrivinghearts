/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */

import { config } from "./configLoader";

export class Logger {
    private readonly packageName: string;
    private readonly debugEnabled: boolean;

    public constructor(packageName: string, debugEnabled: boolean) {
        this.packageName = packageName || "package";
        this.debugEnabled = debugEnabled;
    }

    /**
     * Converts the given message to JSON format if it's an object.
     * @param msg The message to convert.
     * @returns The converted message.
     */
    private jsonConvert(msg: any): string {
        if (typeof msg === 'object') {
            return JSON.stringify(msg);
        } else {
            return msg.toString();
        }
    }

    /**
     * Logs a debug message.
     * @param message The message to log.
     */
    public debug(message: any): void {
        if (!this.debugEnabled) return;
        console.log(`(debug 🐛) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }

    /**
     * Logs an info message.
     * @param message The message to log.
     */
    public info(message: string): void {
        console.log(`(info ℹ️ ) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }

    /**
     * Logs a warning message.
     * @param message The message to log.
     */
    public warn(message: string): void {
        console.warn(`(warn ⚠️ ) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }

    /**
     * Logs an error message.
     * @param message The message to log.
     */
    public error(message: string): void {
        console.error(`(error ❌) @${this.packageName || "package"}: ${this.jsonConvert(message)} `);
    }
}