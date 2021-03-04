const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/assets/js/home.js",
    detail: "./public/assets/js/detail.js",
    favorites: "./public/assets/js/favorites.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Images App",
      short_name: "Images App",
      description: "An application for images",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("public/assets/images/icons/icon-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;