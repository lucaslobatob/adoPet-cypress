const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yhxmj1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
    }
  },
});
