const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

function getResourcePath(name) {
  return path.join('.aws-resources', `${name}.json`);
}

function getResource(name) {
  try {
    const json = fs.readFileSync(getResourcePath(name));
    return JSON.parse(json);
  } catch (err) {
    return null;
  }
}

function createResource(name, data) {
  const resourcePath = getResourcePath(name);
  mkdirp.sync(path.dirname(resourcePath));
  fs.writeFileSync(getResourcePath(name), JSON.stringify(data));
}

module.exports = {
  getResource,
  createResource
}
