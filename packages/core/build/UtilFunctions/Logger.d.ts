/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 */
export interface LogObject {
    packageName: string;
    message: string;
    logLevel: "debug" | "info" | "warn" | "error";
}
