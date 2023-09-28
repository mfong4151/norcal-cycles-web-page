# Norcal Cycles Website

## Setup

After cloning the project, run

```bash
npm install #to install dependencies
npm start   #to start the app in developement mode
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Expected JSON format

```json
Expected JSON format:
{
  "make": "Honda",
  "model": "Rebel",
  "transmission": "Manual",
  "engine": "V-Twin",
  "id": 1,
  "miles": 1000,
  "price": 8000,
  "images": [bike1, bike2, bike3, bike4, bike5, bike6, bike7],
  "color": "Red",
  "vin": "123456789",
  "bodyStyle": "Cruiser",
  "comments": "Great bike for beginners",
  "year": 2022
},



```