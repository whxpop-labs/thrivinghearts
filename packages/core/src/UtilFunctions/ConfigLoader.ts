import fs from 'fs';
import path from 'path';

/**
 * Configuration interface for the Discord gateway.
 */
interface DiscordGatewayConfig {
    /**
     * The authentication token for the Discord gateway.
     */
    token: string;
    /**
     * The client ID for the Discord gateway.
     */
    client_id: string;
}

/**
 * Configuration interface for the Discord settings.
 */
interface DiscordConfig {
    /**
     * Configuration for the Discord gateway.
     */
    gateway: DiscordGatewayConfig;
    /**
     * Array of developer IDs for the Discord bot.
     */
    developers: string[];
}

/**
 * Top-level configuration interface for the application.
 */
interface AppConfig {
    /**
     * Configuration specific to Discord settings.
     */
    discord: DiscordConfig;
    /**
     * Log level configuration for the application.
     */
    logLevel: string;
}

/**
 * Default name of the configuration file.
 */
const defaultConfigFileName = 'doodley.json';

/**
 * Loads the application configuration from a JSON file.
 * @param configFilePath - Path to the configuration file. Defaults to 'doodley.json' in the project root if not provided.
 * @returns The application configuration object.
 */
function loadConfig(configFilePath?: string): AppConfig {
    if (!configFilePath) {
        configFilePath = path.join(process.cwd(), defaultConfigFileName);
    }
    
    try {
        const configFileData = fs.readFileSync(configFilePath, 'utf-8');
        const config: AppConfig = JSON.parse(configFileData);
        return config;
    } catch (error) {
        console.error('Error loading configuration:', error);
        return {} as AppConfig;
    }
}

/**
 * The loaded application configuration.
 */
const config = loadConfig();

export { loadConfig, config };
