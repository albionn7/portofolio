import AdmZip from "adm-zip";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { slClient } from "./sl-client.js";
import config from './package.json' with { type: 'json' }

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {},
  required: [],
  additionalProperties: true,
};

const indexhtml = fs.readFileSync(
  path.join(__dirname, "dist", "index.html"),
  "utf-8"
);
fs.writeFileSync(
  path.join(__dirname, "dist", "index.liquid"),
  indexhtml
);
(async () => {
  const name = config.name;
  const version = config.version;
  const zip = new AdmZip();
  zip.addLocalFolder(path.join(__dirname, "dist"));
  const buffer = await zip.toBufferPromise();
  const blob = new Blob([buffer]);
  const contentType = config.contentType ?? "text/html";
  const template = await slClient.templates.assertTemplateExists(name);
  try {
    await slClient.templates.uploadVersion({
      name: template.name,
      version,
      contentType,
      zip: blob,
      jsonSchema: schema,
    });
    console.info(`Template ${name} version ${version} published`);
  } catch (e) {
    if (e.response.status == 409) {
      console.error(`Version ${version} already exists`);
    } else {
      console.error("Failed to publish template");
    }
  }
})();
