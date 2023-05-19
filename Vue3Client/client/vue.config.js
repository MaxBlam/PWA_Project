const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js",
    },
    manifestOptions: {
      name: "Nekotastic - Digital Cookbook",
      short_name: "Nekotastic",
      theme_color: "#F4A300",
      background_color: "#222222",
      display: "standalone",
      start_url: "/",
    },
  },

  outputDir: path.resolve(__dirname, "../server/client"),
  productionSourceMap: false,
});
