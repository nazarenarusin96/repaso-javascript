const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fnqebv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    chromeWebSecurity: false,
    video:true,
    failOnStatusCode: false
  },
});
