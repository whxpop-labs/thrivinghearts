# The Doodley Project

An opinionated collection of TypeScript libraries, built on top of Eris & DiscordJS, to make building Discord bots easier and safer.

Powered by whxpop labs & open-source.

## Installation

A Doodley app can be created using our custom generator tool. Simply run this command to get started:

```bash
npx @doodley/create-doodley-app@latest
```

### CDA Templates

To allow for extensility and open-source contribution, we have added an easy to use templates feature, as well as a template registry that we host.

By default, Doodley pulls from our GitHub repository, and uses the `basic-app` template.

#### Doodley Registry

To use a template from the Doodley Registry, simply run the following command, substituting `[template-name]` with the name of the template you want to use.

`npx @doodley/create-doodley-app --template registry/[template-name]`

#### Custom Template

To use a template that is hosted elsewhere (e.g. GitHub, a FTP server) simply append the **base** of the template directory to the `--template` flag. The base directory of a template should have a `CDA.json` file and a `[app-name].ds` file in it. These files tell the CDA generator which files to pull.

`npx @doodley/create-doodley-app --template https://public-ftp.whxpop-labs.net/doodley/templates/basic-app`

> Please note that not all templates will be on the registry. Template authors must upload and/or submit their template to the registry to become avaliable.

### Manual Install

To build an app from scratch, start by installing the `@doodley/core` library. This contains the code you need to get a bot online. This can be done by running:

```bash
npm init -y && npm install @doodley/core
```

From here, check the documentation for a getting started guide, examples and breakdowns of other plugins.

## Attribution

This project is built on top of, and would not be possible without, DiscordJS and Eris. Doodley also makes use of other open-source code, avaliable through NPM.

Doodley is released under the Mozilla Public License, Version 2.0
