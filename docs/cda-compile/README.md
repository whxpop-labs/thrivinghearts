# Getting Started

## What is this used for?

The cda-compile script transpiles your create-doodley-app (CDA)  template config file into DoodleyScript, the format that the CreateDoodleyApp template downloader uses to pull custom templates from custom sources.

## Usage

To use the CDA compiler, you can simply use our NPX command by invoking the following in your terminal:

```bash
npx @doodley/cda-compile@latest
```

Make sure to execute this command in the root of your CDA template - and make sure you have a fully filled out and up-to-date `cda.json` config file. The compiler does not work without it.

***

Once you have a DoodleyScript file, you can simply push your template to your version control system. From there, you can use the CDA command line tool to then push your template to the official CDA template registry (registry.doodley.cc).

***

## Command Invocation & Flags

{% tabs %}
{% tab title="Invocation" %}
### NPX

To invoke the compiler through NPX, run the following command in your terminal:

```bash
npx @doodley/cda-compile@latest
```

### NPM Global Install

To install the tool globally on your machine, install from NPM with the following command:

```bash
npm i -g @doodley/cda-compile
```

To invoke the command, simply run this in any template directory:

```
cda-compile
```
{% endtab %}

{% tab title="Sub-Commands" %}
| Command           | Function                                                                 | Aliases            |
| ----------------- | ------------------------------------------------------------------------ | ------------------ |
| --generate-config | Generates a base config for a new CDA template.                          | `--gc`             |
| --test            | Tests your cda.json config to make sure it is valid.                     | `-t`, `--validate` |
| --version         | Displays the compiler and current schema version.                        | `-v`               |
| --help            | Displays all avaliable commands and flags. Also displays copyright info. | `-h`               |
{% endtab %}
{% endtabs %}
