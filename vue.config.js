const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
});
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
      },
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
};
