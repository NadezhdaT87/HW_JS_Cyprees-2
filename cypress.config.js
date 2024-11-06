const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd5hwxd',
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/client/index.php",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
