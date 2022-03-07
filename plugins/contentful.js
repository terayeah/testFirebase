// ./plugins/contentful.js

const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
};
const pconfig = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CPA_ACCESS_TOKEN,
  host: "preview.contentful.com"
};
// export `createClient` to use it in page components
module.exports = {
  createClient(preview = false) {
    return contentful.createClient(preview ? pconfig : config);
  },
};