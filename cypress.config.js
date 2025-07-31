const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 240000, // 240 secondos (240,000 ms)
    setupNodeEvents(on, config) {    
      // implement node event listeners here
    },
  },
});