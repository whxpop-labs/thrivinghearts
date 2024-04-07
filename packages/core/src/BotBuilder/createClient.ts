import { Client } from "discord.js";
import { config, Logger } from '@doodley/utils';
import { ClientDataObject } from "./types";

const logger = new Logger('doodley/core/createclient', true);

export async function CreateClient(token: string | undefined, data: ClientDataObject) {
	let GatewayToken  = token || config.discord.gateway.token;
	let clientObject;

	const { intents } = data;

	try {
		logger.debug('Attempting to create client...');

		clientObject = new Client({
			intents
		});
	} catch (error: any) {
		logger.error(error.toString());
	}

	try {
		if (!clientObject) { logger.error('There was an issue creating the client. Exiting...'); process.exit(1) };

		logger.debug('Created client! Attempting to connect to gateway...');
		await clientObject.login(token);

		logger.info(`Connected to Discord gateway! Logged in as @${clientObject.user?.username}`);
	} catch (error: any) {
		logger.error(error.toString());
	}

	return clientObject;
}