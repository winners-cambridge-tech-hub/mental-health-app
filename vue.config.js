const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:
      'https://api.nhs.uk/mental-health?subscription-key=1db5c07415594d56a23f8fd1204ac928',
  },
});
