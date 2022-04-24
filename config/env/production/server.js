module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://d3v-center.herokuapp.com/'),
    app: { 
      keys: env.array(process.env.APP_KEYS)
    },
  })