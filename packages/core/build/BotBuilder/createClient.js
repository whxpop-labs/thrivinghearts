"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClient = void 0;
const ConfigLoader_1 = require("../UtilFunctions/ConfigLoader");
function CreateClient(token, intents) {
    let GatewayToken = token || ConfigLoader_1.config.discord.gateway.token;
}
exports.CreateClient = CreateClient;
