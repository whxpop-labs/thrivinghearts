---
description: Examples of the JSON config and a matching DoodleyScript output.
---

# 📖 Schema Example

{% hint style="info" %}
For DoodleyScript schema version 1.
{% endhint %}

To help with writing templates, as well as debugging issues, we have included full examples for both the CreateDoodleyApp template config, as well as the resulting output from the V1 compiler.

## CDA.json Example

{% hint style="info" %}
This is an example of **all** avaliable config points for schema version 1. Any additional data added will not be transferred to the output DoodleyScript.
{% endhint %}

```json
{
  "schema_version": "1",
  "metadata": {
    "url": "https://github.com/whxpop-labs/thrivinghearts/templates/basic-app/",
    "authors": { "discord": ["@whxpop"], "github": ["whizbangpop", "whxpop-labs"], "other": [] },
    "version": "0",
    "license": "AGPL 3.0"
  },
  "commands": [
    "npm i -g typescript ts-node @types/node nodemon",
    "yarn install",
    "tsc",
    "node dist/welcome.js"
  ],
  "files": {
    "config": [
      "/tsconfig.json",
      "/package.json",
      "/doodley.conf",
      "/package-lock.json"
    ],
    "code": {
      "folders": ["/src", "/database", "/test"],
      "files": []
    }
  }
}
```

## DoodleyScript Example

{% hint style="info" %}
DoodleyScript is automatically generated by the CDA-Compiler script. It is **not** recommended to write a DoodleyScript config by hand.
{% endhint %}

```yaml
SCHEMA 1

#DoodleyScript - DO NOT MODIFY
#Generated with CreateDoodleyApp compile script

metadata.url: https://github.com/whxpop-labs/thrivinghearts/templates/basic-app/
metadata.authors: Discord: @whxpop GitHub: whizbangpop GitHub: whxpop-labs 
metadata.version: 0
metadata.license: AGPL 3.0
commands: npm i -g typescript ts-node @types/node nodemon && yarn install && tsc && node dist/welcome.js 
file: templates/basic-app/src/app.js
file: templates/basic-app/src/bd.hs
file: templates/basic-app/src/test/rest.t.js]
file: templates/basic-app/src/test.js
file: templates/basic-app/database/bea,sjs.sql
file: templates/basic-app/database/db.sql
file: templates/basic-app/test/test.a
```