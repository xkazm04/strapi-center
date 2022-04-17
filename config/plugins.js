module.exports = {
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: [
            // list of Content-Types UID to cache, example:   "api::category.category",
          
          ],
        },
      },
      seo: {
        enabled: true,
      },
    },
  };