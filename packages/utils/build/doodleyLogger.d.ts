/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 * @remarks This module provides logging functionalities.
 */
export declare namespace logger {
    /**
     * Logs a debug message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function debug(message: any, packageName?: string): void;
    /**
     * Logs an info message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function info(message: string, packageName?: string): void;
    /**
     * Logs a warning message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function warn(message: string, packageName?: string): void;
    /**
     * Logs an error message.
     * @param message The message to log.
     * @param packageName The name of the package (optional).
     */
    function error(message: string, packageName?: string): void;
}
