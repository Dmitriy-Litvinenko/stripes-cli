// Logic borrowed from stripes-core's package2md.js excluding file load and console output
// $ node ../stripes-core/util/package2md.js package.json > MD.json
module.exports = function generateModuleDescriptor(packageJson, isStrict) {
  const stripes = packageJson.stripes || {};
  const moduleDescriptor = {
    id: `${packageJson.name.replace(/^@/, '').replace('/', '_')}-${packageJson.version}`,
    name: packageJson.description,
    permissionSets: stripes.permissionSets || [],
  };
  if (isStrict) {
    const interfaces = stripes.okapiInterfaces || [];
    const optional = stripes.optionalOkapiInterfaces || [];
    moduleDescriptor.requires = [].concat(
      Object.keys(interfaces).map(key => ({ id: key, version: interfaces[key] })),
      Object.keys(optional).map(key => ({ id: key, version: optional[key], optional: true })),
    );
  }
  return moduleDescriptor;
};
