/**
 * @author whxpop labs
 * @version 0.1.0
 * @name DoodleyLogger
 */

import { config } from "./ConfigLoader"

export interface LogObject {
	packageName: string,
	message: string,
	logLevel: "debug" | "info" | "warn" | "error"
}

function Log(info: LogObject) {
	switch(info.logLevel) {
		case "debug":
			if (config.logLevel !== "debug") return;
			console.log(`(debug 🐛) @${info.packageName}: ${info.message} `);
		case "info":
			if (config.logLevel !== "info") return;
			console.log(`(info ℹ️) @${info.packageName}: ${info.message} `);
	}

}

Log({ packageName: 'doodley/core', message: 'test', logLevel: "info" })