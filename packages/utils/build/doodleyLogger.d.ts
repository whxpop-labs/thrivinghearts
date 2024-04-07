/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */
export declare class Logger {
    private readonly packageName;
    private readonly debugEnabled;
    constructor(packageName: string, debugEnabled: boolean);
    /**
     * Converts the given message to JSON format if it's an object.
     * @param msg The message to convert.
     * @returns The converted message.
     */
    private jsonConvert;
    /**
     * Logs a debug message.
     * @param message The message to log.
     */
    debug(message: any): void;
    /**
     * Logs an info message.
     * @param message The message to log.
     */
    info(message: string): void;
    /**
     * Logs a warning message.
     * @param message The message to log.
     */
    warn(message: string): void;
    /**
     * Logs an error message.
     * @param message The message to log.
     */
    error(message: string): void;
}
