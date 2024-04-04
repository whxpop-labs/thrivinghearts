#!/usr/bin/env node

import * as fs from "node:fs";
import * as path from "node:path";

const execPath   = process.cwd();
const execDir    = fs.readdirSync(execPath);
const regexp     = process.argv[3] || "cda.json";
const version    = "1"; 
var   files: any = [];
let   BaseDir    = execPath.split("/").reverse()[0];

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


console.log(`CreateDoodleyApp - Automated Compiler\nVersion: ${version}\n`);
console.log(`Copyright whxpop labs 2024. Released under Mozilla Public Licence 2.\n\n`);

function CheckIfConfigExists(): any[] {
	let FoundFile = false;
	let File = "";

	execDir.forEach((file) => {
		if (file.match(regexp)) {
			FoundFile = true;
			File = file;
		}
	});

	console.log(`✔ Found an existing CDA config file`)
	return [FoundFile, File];
}

function CreateConfigFile() {
	const clearFile = fs.writeFileSync(`${execPath.split("/").pop()}.ds`, "");

	const config = fs.createWriteStream(`${execPath.split("/").pop()}.ds`, {
		flags: 'a'
	});
	config.write(`SCHEMA ${version}\n\n#DoodleyScript - DO NOT MODIFY\n#Generated with CreateDoodleyApp compile script\n\n`)

	console.log(`✔ Created DoodleyScript compiled base`)
	return config;
}

function GenerateConfig(UserConfig: any, Config: fs.WriteStream) {
	const Stream = fs.readFileSync(UserConfig)
	const Settings = JSON.parse(Stream.toString())

	let ExportString = ""; 
	let AuthorString = "";
	let CommandsString = "";

	if (!ConfigChecker(Settings)) {console.warn(`⨯ CDA config failed inspection. Unable to proceed.`); return};

	// Add metadata
	ConfigLineWriter(['metadata', 'url'], Settings.metadata.url, Config)
	ConfigLineWriter(['metadata', 'authors'], CreateAuthorString(Settings), Config)
	ConfigLineWriter(['metadata', 'version'], Settings.metadata.version, Config)
	ConfigLineWriter(['metadata', 'license'], Settings.metadata.license, Config)

	// Add commands
	Settings.commands.forEach((cmd: string) => {
		if (cmd === Settings.commands[0]) CommandsString += `${cmd} `
		else CommandsString += `&& ${cmd} `
	})
	ConfigLineWriter(['commands'], CommandsString, Config);

	// Find folers and subfiles
	Settings.files.code.folders.forEach((folder: string) => {
		const dirFiles = RecFind(path.join(execPath, folder));
	});

	// Iterate through found files and write to config
	files.forEach((file: string) => {
		ConfigLineWriter(['file'], file, Config);
	});

	console.log(`✔ Compiled metadata to DoodleyScript`);
}

function RecFind(folder: string) {
	const Files = fs.readdirSync(folder, { withFileTypes: true });
	for (const File of Files) {
		if (File.isDirectory()) {
			RecFind(path.join(folder, File.name))
		} else {
			let FilePath = "";
			let FoundBase = false;
			const array_of_dirs = folder.split("/");
			for (var i in array_of_dirs) {
				if (FoundBase) return;
				if (array_of_dirs[i] !== BaseDir) array_of_dirs.shift()
				else {
					FoundBase = true;
					FilePath = array_of_dirs.join("/")
					files.push(path.join(FilePath, File.name))
				}
			}
		}
	}
}

function ConfigLineWriter(title: Array<string>, content: string, exportStream: fs.WriteStream) {
	let titleLine = "";
	const len = title.length - 1;
	title.forEach((item) => {
		if (title.length === 1) titleLine += `${item}: ${content}\n`
		else if (item === title[0]) titleLine += `${item}`
		else if (item === title[len]) titleLine += `.${item}: ${content}\n`
		else titleLine += `.${item}`
	});

	Config.write(titleLine);
}

function CreateAuthorString(Settings: any): string {
	let AuthorString: string = "";
	
	Object.entries(Settings.metadata.authors).forEach((platform: Array<any>) => {
		platform.shift();
		platform.forEach((userp: Array<Array<String>>) => {
			userp.forEach((user: any) => {
				const puser = user.toString();
				if (puser.startsWith("@")) AuthorString += `Discord: ${user} `
				else AuthorString += `GitHub: ${user} `
			})
		})
	})

	return AuthorString;
}

function ConfigChecker(json_stream: any): Boolean {
	if (!json_stream) {console.error("no config found"); return false};
	if (json_stream.schema_version !== version || !json_stream.schema_version) {console.error(`⨯ Non matching schema version.`); return false};

	if (!json_stream.metadata || 
		!json_stream.commands || 
		!json_stream.files) {console.error(`⨯ No top-level config found.`); return false};

	if (!json_stream.metadata.url || 
		!json_stream.metadata.authors || 
		!json_stream.metadata.version || 
		!json_stream.metadata.license) {console.error(`⨯ No CDA metadata found.`); return false};

	if (!json_stream.files.config || (!json_stream.files.code.folders || !json_stream.files.code.files)) {console.error(`⨯ No files found.`); return false};

	return true;
}

const UserConfig = CheckIfConfigExists();
if (!UserConfig[0]) process.exit();

const Config = CreateConfigFile();
let Success  = GenerateConfig(UserConfig[1], Config);