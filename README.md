# Overview
- This boilerplate utilises [yarn workspaces](https://yarnpkg.com/features/workspaces) and [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to achieve a monorepo setup. Shared components/libaries can be stored individually within the `packages` folder, and can be used across all webapps.


# Requirements
- Yarn (v2++)
    - [workspace-tools](https://yarnpkg.com/cli/workspaces/foreach)


# Getting started / Initialising a new webapp
- **In the apps folder:**
    - Initialise a new nextjs project with `yarn create next-app`
- **In your new webapp folder:**
    - Update package.json
        - Package name (no overlapping)
        - Port used for dev (no overlapping)
        - Replace script commands with the ones in the example folder
        - Replace next's starter next.config.js with the one in the example
- **`cd` into your new webapp**
    - Install NEXT-IMAGES with `yarn add next-images`
    - Install next-transpile-modules with `yarn add next-transpile-modules`
- **Back in root**
    - If its not already installed, go ahead and add workspace-tools with `yarn plugin import workspace-tools`. This allows us to run `yarn workspaces foreach` commands
    - **Remove example webapp from the apps folder**


# Run commands
Running dev environment - port is tied to what you specified in your webapp's package.json:

`yarn workspaces foreach run dev`

For Prod — build assets will be pushed into `build-dist`:

`yarn workspaces foreach run build`

Building static export — build assets will be pushed into `build-static`:

`yarn workspaces foreach run export`


# Caveats
- If your project requires a static build, ensure that you are not using `Next/images` components in your webapp. This will cause builds to FAIL.


# Using common react components across webapps
- For a start, HelloWorld's import path will be `"../../../packages/common/src"`
