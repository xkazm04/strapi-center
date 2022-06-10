module.exports = {
      seo: {
        enabled: true,
      },
      meilisearch: {
        config: {
          // Your meili host
          host: "https://server.d3vlibrary.com/",
          // Your master key or private key
          apiKey: process.env.MEILI,
        }
    },
    
  }

  module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET')
    },
    },
    // ...
  });