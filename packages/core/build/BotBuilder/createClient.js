"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClient = void 0;
const discord_js_1 = require("discord.js");
const utils_1 = require("@doodley/utils");
const logger = new utils_1.Logger('doodley/core/createclient', false);
async function CreateClient(token, data) {
    let GatewayToken = token || utils_1.config.discord.gateway.token;
    let clientObject;
    const { intents } = data;
    try {
        logger.debug('Attempting to create client...');
        clientObject = new discord_js_1.Client({
            intents
        });
    }
    catch (error) {
        logger.error(error.toString());
    }
    try {
        if (!clientObject) {
            logger.error('There was an issue creating the client. Exiting...');
            process.exit(1);
        }
        ;
        logger.debug('Created client! Attempting to connect to gateway...');
        await clientObject.login(token);
        logger.info(`Connected to Discord gateway! Logged in as @${clientObject.user?.username}`);
    }
    catch (error) {
        logger.error(error.toString());
    }
    return clientObject;
}
exports.CreateClient = CreateClient;
