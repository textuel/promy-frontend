const rewireModuleResolver = require('react-app-rewire-module-resolver');

module.exports = function override(config, env) {
    const moduleResolverOptions = {
        root: ['./src'],
    };

    config = rewireModuleResolver(config, env, moduleResolverOptions);
    return config;
};
