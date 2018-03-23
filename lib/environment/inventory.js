// These are candidates for aliases and insertion into stripes.config.js
// Their @folio scope names omit "ui-"
const uiModules = [
  'ui-users',
  'ui-inventory',
  'ui-eholdings',
  'ui-checkin',
  'ui-checkout',
  'ui-circulation',
  'ui-organization',
  'ui-developer',
  'ui-plugin-find-user',
  'ui-requests',
  'ui-search',
  'ui-trivial',
  'ui-items',
];

// These modules are candidates for aliases
// They do not need to be inserted into a stripes.config.js
const stripesModules = [
  'stripes-connect',
  'stripes-components',
  'stripes-smart-components',
  'stripes-react-hotkeys',
  'stripes-logger',
  'stripes-form',
  'stripes-core',
];

// Platforms will receive a .stripesclirc configuration
// They are not aliased or added to stripes.config.js
const platforms = [
  'stripes-sample-platform',
  'folio-testing-platform',
];

// Available for cloning
const otherModules = [
  'eslint-config-stripes',
  'ui-plugin-example',
  'ui-testing',
];

// Add the @folio scope, omitting "ui-" prefix if necessary
function toFolioName(theModule) {
  let moduleName = theModule;
  if (uiModules.includes(theModule)) {
    moduleName = moduleName.replace(/^ui-/, '');
  }
  return `@folio/${moduleName}`;
}

module.exports = {
  uiModules,
  stripesModules,
  platforms,
  otherModules,
  allModules: uiModules.concat(stripesModules, platforms, otherModules),
  toFolioName,
};