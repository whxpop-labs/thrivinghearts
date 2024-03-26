# @doodley/cda-compile

The official compiler for converting CDA (create-doodley-app) template configs into valid DoodleyScript, the config and language used to configure core Doodley components.

## Installation

> NPX is currently having issues with executing the script. We currently only support installing globally

To install `cda-compile` simply run:

```bash
npm install --global @doodley/cda-compile
```

## Usage

Simply goto the root of your create-doodley-app template and run:

```bash
cda-compile
```

This will create a new `.ds` file with the name of your template. This **must** be published with your template, or the CDA generator will not be able to detect your template. The official CDA template registry also requires this file to be present.

## Fun Facts

This compiler is built using pure JS/TS and does not require any packages! The total size of this compiler comes out to around 9.4kb unpackaged! (According to NPM)
