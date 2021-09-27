# Overview
This boilerplate utilises [yarn workspaces](https://yarnpkg.com/features/workspaces) and [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to achieve a monorepo setup. Shared components/libaries can be stored individually within the `packages` folder, and then used across all webapps.


# Requirements
- Yarn (v2++)
    - [workspace-tools](https://yarnpkg.com/cli/workspaces/foreach)


# Getting started
- Get started with [Initialising a new webapp](#initialising-a-new-webapp)
- Run `yarn install` if necessary


# Initialising a new webapp
- **In the apps folder:**
    - Initialise a new nextjs project with `yarn create next-app`
- **In your new webapp folder:**
    - Update package.json
        - Package name, if you did not run via `yarn create next-app` (no overlapping)
        - Port used for dev (no overlapping)
        - Replace script commands with the ones in the example folder
        - Replace next's starter next.config.js with the one in the example
- **`cd` into your new webapp**
    - Install NEXT-IMAGES with `yarn add next-images`
    - Install next-transpile-modules with `yarn add next-transpile-modules`
- **Back in root**
    - If its not already installed, add workspace-tools with `yarn plugin import workspace-tools`. This allows us to run `yarn workspaces foreach` commands
    - **Remove example webapp from the apps folder**


# Run commands
Running dev environment - port is tied to what you specified in your webapp's package.json:

`yarn workspaces foreach run dev`

For Prod — build assets will be pushed into `build-dist`:

`yarn workspaces foreach run build`

Building static export — build assets will be pushed into `build-static`:

`yarn workspaces foreach run export`


# Caveats
- If your project requires a static build, ensure that you are not using `Next/images` components in your webapp. **It will not work.**
- Since its a monorepo setup, you will need multiple .gitignore's for each web application.


# Using common react components across webapps
- Nothing much to this, just import components in as per usual. For reference, `HelloWorld`'s path in your webapp's index page would be `../../../packages/common/components/HelloWorld/HelloWorld`.
