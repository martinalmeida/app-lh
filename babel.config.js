module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./app",
            "@android": "./app/(android)",
            "@web": "./app/(web)",
            "@components": "./components",
            "@assets": "./assets",
            "@hooksC": "./hooks/config"
          },
        },
      ],
    ],
  };
};
