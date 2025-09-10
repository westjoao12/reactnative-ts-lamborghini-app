# Lamborghini Garage

A React Native app to browse Lamborghini cars, view details, and simulate purchases.

## Project Structure

```
├── App.tsx
├── index.ts
├── index.d.ts
├── package.json
├── tsconfig.json
├── app.json
├── .gitignore
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── logo.png
│   └── splash-icon.png
└── src/
    ├── api/
    │   └── getCars.ts
    ├── components/
    │   ├── BuyButton/
    │   │   ├── index.tsx
    │   │   └── style.tsx
    │   ├── CardView/
    │   │   ├── actions.ts
    │   │   ├── index.tsx
    │   │   ├── props.tsx
    │   │   └── style.tsx
    │   └── Divider/
    │       ├── index.tsx
    │       └── styles.tsx
    ├── constants/
    │   └── car.ts
    └── screens/
        └── GarageScreen/
            ├── index.tsx
            └── style.tsx
```

## Features

- Browse Lamborghini cars from a remote API
- View car images, names, brands, release years, and prices
- Navigate between cars
- Simulate a purchase with a "Buy This" button

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the app:**
   ```sh
   npm start
   ```
   Or use platform-specific commands:
   ```sh
   npm run android
   npm run ios
   npm run web
   ```

## Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- TypeScript

## API

Car data is fetched from:
- [CAR_API_BASE_URL](src/constants/car.ts):  
  `https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json`

## License

This project is for educational
