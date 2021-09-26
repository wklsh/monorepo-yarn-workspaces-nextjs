# Overview
- This boilerplate utilises [yarn workspaces](https://yarnpkg.com/features/workspaces) and [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to achieve a monorepo setup. Shared components can be stored individually within the `packages` folder, and can be used across all webapps.


# Requirements
- Yarn (v2++)
    - [workspace-tools](https://yarnpkg.com/cli/workspaces/foreach)


# Getting started / Initialising a new webapp
- In the webapp folder:
    - Initialise a new nextjs project with `yarn create next-app`
    - Update package.json
        - Package name (no overlapping)
        - Port used for dev (no overlapping)
        - Replace script commands with the ones from the example folder
    - Replace next's starter next.config.js with the one in the example
    - Install next-images with `yarn add next-images`
    - Install next-transpile-modules with `yarn add next-transpile-modules`
    - Install workspace-tools for yarn workspaces commands with `yarn plugin import workspace-tools`
    - Remove example webapp from the folder


# Run commands
There is no need for script commands in the root folder, as everything is ran with Yarn Workspaces. As we will be using `yarn workspaces` for our run commands, ensure that your global yarn is > v2.

Running dev environment:

`yarn workspaces foreach run dev`

For Prod:

`yarn workspaces foreach run build`

Building static export:

`yarn workspaces foreach run export`


# Caveats
- If your project requires a static build, ensure that you are not using `Next/images` components in your webapp. This will cause builds to FAIL.


# Using common react components across webapps
- For a start, HelloWorld's import path will be `"../../../packages/common/src"`
