const withTM = require("next-transpile-modules")(["common"]); // pass the modules you would like to see transpiled
const withImages = require("next-images");

if (process.env.IS_EXPORTING) {
  console.log(
    "\n",
    "\n",
    "----------------------------------------------------------------------------",
    "\n",
    "STATIC EXPORTING:",
    "\n",
    "MAKE SURE THAT YOU DO NOT HAVE ANY <IMAGE /> ELEMENTS. THESE DO NOT WORK!",
    "\n",
    "----------------------------------------------------------------------------",
    "\n",
    "\n"
  );
}

module.exports = withTM(
  withImages({
    assetPrefix: ".",
    distDir: `../../build-dist/${process.env.npm_package_name}`,
    images: {
      loader: process.env.IS_EXPORTING ? "imgix" : null,
      path: process.env.IS_EXPORTING ? "/" : null,
    },
  })
);
