## Pokemoni App - Development Documentation

### Introduction

This document serves as a technical guide for developers collaborating on the Pokemoni mobile application. It covers the project setup, running the app locally, building for production, and utilizing third-party libraries.

### Prerequisites

1. Node.js and npm (or yarn) installed on your development machine.
2. A code editor or IDE of your choice.
3. Basic understanding of React Native development concepts.

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup).

### Project Setup

1. Clone the project repository from [this github link](https://github.com/AmbassEugene/pokemoni.git)
2. Navigate to the project directory in your terminal.
3. Install project dependencies:

``` Bash
# For Yarn:
yarn 

# For NPM:
npm install

```

### Running Locally
#### Android: 

``` Bash
npx react-native run-android --reset-cache
```
#### IOS: 

``` Bash
npx react-native run-ios --reset-cache
```

The above code will start the server and commence either building app either on a connected device or an emulator. The `--reset-cache` flag will typically reset your cache. It is good practice to always reset cache during development.

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup).

### Development Workflow

- Code changes typically trigger a hot reload in the simulator/device, allowing you to see changes reflected quickly.
- Utilize tools like React Developer Tools for debugging and inspecting the component hierarchy.
- Refer to the official React Native documentation ([invalid URL removed]) for further guidance on development practices.

### Folder Structure

Below is the folder structure of the app:

```
└── 📁pokemoni
    └── 📁assets
        └── 📁fonts
        └── 📁images
    └── 📁android
    └── 📁ios
    └── 📁src
        └── 📁components
        └── 📁config
        └── 📁screens
        └── 📁util
```

### Third-Party Libraries

The Pokemoni app utilizes the following third-party libraries:

- **React-Navigation:** (https://reactnavigation.org/) - Navigation library for building a navigation hierarchy within the app.
- **Flash-Lists:** (https://shopify.github.io/flash-list/docs/) - Optimized list rendering library for handling large datasets efficiently.
- **React-Error-Boundary:**(https://www.npmjs.com/package/react-error-boundary)) - Error handling component to gracefully handle errors within a specific part of the UI.
- **Styled-Components:** (https://styled-components.com/) - CSS-in-JS library for styling React components.
- **React-Reanimated:** (https://docs.swmansion.com/react-native-reanimated/) - Animation library for creating smooth and performant animations.
- **React-Native-SVG:** (https://github.com/react-native-svg/react-native-svg) - Library for rendering and manipulating SVGs within React Native components.
