"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.loadConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Default name of the configuration file.
 */
const defaultConfigFileName = 'doodley.json';
/**
 * Loads the application configuration from a JSON file.
 * @param configFilePath - Path to the configuration file. Defaults to 'doodley.json' in the project root if not provided.
 * @returns The application configuration object.
 */
function loadConfig(configFilePath) {
    if (!configFilePath) {
        configFilePath = path_1.default.join(process.cwd(), defaultConfigFileName);
    }
    try {
        const configFileData = fs_1.default.readFileSync(configFilePath, 'utf-8');
        const config = JSON.parse(configFileData);
        return config;
    }
    catch (error) {
        console.error('Error loading configuration:', error);
        return {};
    }
}
exports.loadConfig = loadConfig;
/**
 * The loaded application configuration.
 */
const config = loadConfig();
exports.config = config;
