import { Client } from "discord.js";
import { ClientDataObject } from "./types";
export declare function CreateClient(token: string | undefined, data: ClientDataObject): Promise<Client<boolean> | undefined>;
