module.exports = function f(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};
