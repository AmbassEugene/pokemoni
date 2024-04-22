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


![Dark mode of Pokemoni app - Home Screen](https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha1uOVLRsRTT2a5zWRw24V_iUWNgfMYkeYSlFsJpSJSlTOjCefDiMD5a-z2IziIKjU4qmgWSQ9TXwyLID7PxhuReJ1YugJjTsk=w2056-h1926-rw-v1)

![Details Screen - Darkmode](https://lh3.googleusercontent.com/fife/ALs6j_EcAq8450wUJ3jCP6Lo9zA-Fh9IfWCCOAOWf-CwOZ41OuhNh3uYrSfLyFyXs8aLHauYCPR0Pz8CL4YqIBplxcFOvB1zAfPbNTR5bf2HWY3JTsyueBeq3L4mkKSzHa_FgJP7AVmrtVSAglp7b5kBpzQvCJeT0unJUJQTWJam7SwLJowm99Qjpl1zMInyqClhgRWKsfZx4dt1XPLdE1jeE6NqqZHWs_n_PI69hUq6Ny4s_G6uTEzgkaxCuEG0qZiUH_Ek4sfALqEh0jAdHwlM81nUZJunzu1XtBgAhzWQJ89RltF7c7iPUwvNa7_VOL1c67-JrXG4SLCrT5A_k6DBYr0NrViyREC6E-iEuh6oQQB9o56GGn1vkQfHkMa6JnUUir1a9fe2lnz9PJpwAs5K6kTkiATVaykQcdbGe69GtEp0oqyE0Q0qvvXZ1cMMpOxApWOWh2229xj-Qk0qovh9zLYrKU2hoQzF5Rt4lvUpeAPPIOvPymUYtnvbRny59UQkCuXraUYxx_Vqk9sTFxrA4QKLyOwbNf6QFN-T6uCD3ooG1SkGjWghQbEH6KUEFaHW69K3i6uk2-NI_w0T6k4ODzuHLCSfjrqcbAqbiZ8SDlBKCYygXTGIRaNM4P3fSSlzafddvnEqnh-geG7efYaykWCQ4mrkwwHSpxNPnCYnRoc54fLTDQno-lwLn_N1TjmBVBB1x_2wzlCN7qz8oWD6OZ1J_ufVz3ICXra3DO03V7Qki-rtyg78cgUpnmg4xdE_d__1S-czTBXld43sBRiM23UhqKyFGME7sW3X04f6UKPYzov0qdXN7f1_HVfiyEE3Yf9JG66kXtC2wNJhfaPrS3LoW5icKJazdYIkYPnmTySvt3meLtmSt6Mokd9FY0vtZPxpNkRgdtPjptxhRkhc8Pmy2U1yGSJIrrFW24JF2FcmY95lcC2pKysNKS79EXt6fLw-xID-=w3360-h1926-rw-v1)

![hom screen - Light mode](https://lh3.googleusercontent.com/fife/ALs6j_H8je2XZtJrRc2SFDH0ubDzTDMePTh8mlZBihPdCe7G1BY3HHHyTfvjr7HfwNxvE4ImLIRk7Ekh7GOgcZoyG5fMXW79eodrwYOUunTolrhmN-ayaaG_PV88Q2kXlD5ho7ZDfdix05OxqPmgs-Ly-TXiKhLiZ8m3yyrg-sdlXjaMXoCFGnjaUbjs6rUrl2-Ccwm8Iy2yiAJsxHjYUDw8rVn3R7JwjrwVGAvZnHVNaIFVkHNjZMSEWCX2PEbbdtumy1xwODcLSRQp5hSOo8Rq9MP7kWo7FbT69PqSitOlNEOqtu2vAbPISEtbKVNFJGHr5DD5HGrdQAMRgJqfMt8bKILHuTcA736RoQygy0kSIyfh4rs6ZZX7aDAU1y5zWpuMUnyhDkZty0813p-Cmad5WRu3LCy9_hcVsTWElU_dvDvQogp3K59lraDFHUu7cwENZpv93085pmuM39nT7Vs0VuXTirhSnCF9eefgSq5IQWQiHG_u3utZyA8dfy_sUQcG8-GLs3vRtlk1ly5TnrvqNaRTeb90D2T1w8EqT_6Hq8qffUuDNCUnWIaRqHDS07LxaUg-_FyZtNycL_5CKJMugl2OSVakHQ8GSPEN6mxCb-J9XVX_s8efSiNgJrVFJxDhlGfJF34sTS9aWao0cEq2XxNPHnmwRK9aQ9IySDfxSLG8r0lK1FP5swX-xWMEbPuKSg_qtOcRn1N-qiqheU0cVMq8OIQtGZ-xow9AJC0FOx39NEHSzm9l8O56v0X-UJ_RFTLYHw64Ahu2BOOfA7m6eT-7QPFu9S5mjy6ZvX5jAc8jtdjipX5HVEXJ9L0tdgOv1yFynCbQoWJmYhLpX7n-tZMb9hBUyknfKETI2mcz9v6BlC3mu-Sd846cmwCjL_I-ZZs5Cbe3XlGScWz22myReJzmqDbku5qTqHhmjEHV1OmAlMnfYROggwCC5iKzbnSSaHfapVa5wRAj-XreOkwZ7_E_Uyo6DPFB3Wq5ftNl0uapocqoXwpNrsCV7KWuZJThW7UIin9-dtiFOmY5SZf6LvmcWxpSp7dWQ3G8Yy7FnSVwZ5hAqTuXPQXlr_vFrgJ-pwZtDkeV9hl3ckqNSR7y912Wcj2J7J8c5STej6pKnNA1e05wL4uyZ3kP0GoWHA4MPcVN4440aAbrW2q2bOdkgpfSlTiDRK_6YI-yG7Of7x8Bf9QHJjq0Uv3REdy_ZPFuZEdN2ApDoG_eJ10GnxnRJKr2SczQN2-4ndjsc8nYUKFGRTaYqd78Tml5DCD4Hb3cpxf97Y-KabQW3wHx9NJ_XO1dicS2NUwScUkVFV_O1JjjGov1Z_v8CrifyqCazbqxeMwwkhEI9VhHE84f0JZqXEw7Io03daOdkIa_iIfhF8gMetc-wQ6TduSJ5W1oQgzhPOlvQiNjJBxdl7qvRIk6LAhDLuSGMSl7OXsDp7PZyYE8uz7r0Q51eUF4YvULj2Fte744neKeGFG-wX1cB5QPYbAMw9DLquJ5NEwyHH5ygMds0xw1j7TCqLfWPq3-E0yONDkl3vJEl1Rby55V4JsFalMXnEq5uzL-46CPaavLOXW1mjkHcMrfP4TqlcFk4iPp1R4umy6w8EAZfAgQzA=w3360-h1926)