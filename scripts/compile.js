"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("node:fs"));
const execPath = process.cwd();
const execDir = fs.readdirSync(execPath);
const regexp = process.argv[3] || "cda.json";
const version = "1";
if (process.argv[2] === "-h" || process.argv[2] === '--help') {
    console.log(`CreateDoodleyApp - Automated Compiler\nVersion: ${version}\n\nComplier will search for a "cda.json" file in the execution directory. If your CDA config is in a different location or has a different name, specify this by using the "-f" flag.\n\nALL FLAGS\n-h/--help: Shows this help menu\n-v/--version: Shows the running schema/compiler version. Compiler version always matches schema version\n-f/--file: Specifies where the CDA config is`);
    process.exit();
}
if (process.argv[2] === '-v' || process.argv[2] === '--version') {
    console.log(`Running compiler and schema version: ${version}\nCopyright whxpop labs 2024. Released under Mozilla Public Licence 2.`);
    process.exit();
}
if ((process.argv[2] === '-f' && !process.argv[3]) || (process.argv[2] === '--file' && !process.argv[3])) {
    console.log('Please specify the file name and/or location of your CDA config.');
    process.exit();
}
function CheckIfConfigExists() {
    let FoundFile = false;
    let File = "";
    execDir.forEach((file) => {
        if (file.match(regexp)) {
            FoundFile = true;
            File = file;
        }
    });
    return [FoundFile, File];
}
function CreateConfigFile() {
    const config = fs.writeFileSync(`${execPath.split("/").pop()}.ds`, `SCHEMA ${version}\n\n#DoodleyScript - DO NOT MODIFY\n#Generated with CreateDoodleyApp compile script\n`);
    return config;
}
function GenerateConfig(UserConfig, Config) {
    const Stream = fs.readFileSync(UserConfig);
    const Settings = JSON.parse(Stream.toString());
    let ExportString = "";
    let AuthorString = "";
    let CommandsString = "";
    if (!ConfigChecker(Settings)) {
        console.log('Failed inspection. Data not formatted to schema.');
        return;
    }
    ;
    // Add metadata
    ExportString = ConfigLineWriter(['metadata', 'url'], Settings.metadata.url, ExportString);
    ExportString = ConfigLineWriter(['metadata', 'authors'], CreateAuthorString(Settings), ExportString);
    ExportString = ConfigLineWriter(['metadata', 'version'], Settings.metadata.version, ExportString);
    ExportString = ConfigLineWriter(['metadata', 'license'], Settings.metadata.license, ExportString);
    // Add commands
    Settings.commands.forEach((cmd) => {
        if (cmd === Settings.commands[0])
            CommandsString += `${cmd} `;
        else
            CommandsString += `&& ${cmd} `;
    });
    ExportString = ConfigLineWriter(['commands'], CommandsString, ExportString);
    console.log(ExportString);
}
function ConfigLineWriter(title, content, exportString) {
    let titleLine = "";
    const len = title.length - 1;
    title.forEach((item) => {
        if (title.length === 1)
            titleLine += `${item}: ${content}\n`;
        else if (item === title[0])
            titleLine += `${item}`;
        else if (item === title[len])
            titleLine += `.${item}: ${content}\n`;
        else
            titleLine += `.${item}`;
    });
    return exportString += titleLine;
}
function CreateAuthorString(Settings) {
    let AuthorString = "";
    Object.entries(Settings.metadata.authors).forEach((platform) => {
        platform.shift();
        platform.forEach((userp) => {
            userp.forEach((user) => {
                const puser = user.toString();
                if (puser.startsWith("@"))
                    AuthorString += `Discord: ${user} `;
                else
                    AuthorString += `GitHub: ${user} `;
            });
        });
    });
    return AuthorString;
}
function ConfigChecker(json_stream) {
    if (!json_stream) {
        console.error("no config found");
        return false;
    }
    ;
    if (json_stream.schema_version !== version || !json_stream.schema_version) {
        console.error("non matching schema version");
        return false;
    }
    ;
    if (!json_stream.metadata ||
        !json_stream.commands ||
        !json_stream.files) {
        console.error("no top-level config found");
        return false;
    }
    ;
    if (!json_stream.metadata.url ||
        !json_stream.metadata.authors ||
        !json_stream.metadata.version ||
        !json_stream.metadata.license) {
        console.error("no metadata config found");
        return false;
    }
    ;
    if (!json_stream.files.config || (!json_stream.files.code.folders || !json_stream.files.code.files)) {
        console.error("no files config found");
        return false;
    }
    ;
    return true;
}
const UserConfig = CheckIfConfigExists();
if (!UserConfig[0])
    process.exit();
let Config = CreateConfigFile();
let Success = GenerateConfig(UserConfig[1], Config);