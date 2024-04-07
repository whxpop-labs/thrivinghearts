import type { IntentsBitField, Presence } from "discord.js"

export interface ClientDataObject {
	precenceData?: Presence,
	intents: Array<IntentsBitField>
}