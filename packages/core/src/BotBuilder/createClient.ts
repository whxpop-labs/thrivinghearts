import { Client } from "discord.js";
import { config } from '../UtilFunctions/ConfigLoader';
import type { IntentsBitField } from "discord.js";

export function CreateClient(token: string | undefined, intents: Array<IntentsBitField>) {
	let GatewayToken = token || config.discord.gateway.token;
}