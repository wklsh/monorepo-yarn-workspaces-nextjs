const withTM = require("next-transpile-modules")(["common"]); // pass the modules you would like to see transpiled
const withImages = require("next-images");

module.exports = withTM(
  withImages({
    assetPrefix: ".",
    distDir: `../../build-dist/${process.env.npm_package_name}`,
    images: {
      loader: "imgix",
      path: "/",
    },
  })
);
