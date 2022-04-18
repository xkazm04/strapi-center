module.exports = {
      seo: {
        enabled: true,
      },
      meilisearch: {
        config: {
          // Your meili host
          host: "http://207.154.242.1/",
          // Your master key or private key
          apiKey: process.env.MEILI,
        }
    }
  }