## Folder Structure

After creation, my project should look like this:

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │   ├── condition.js
    │   ├── error.js
    │   ├── forecast.js
    │   ├── index.js
    │   ├── loading.js
    │   ├── location.js
    │   └── search.js
    ├── components
    │   ├── app.js
    │   ├── app.scss
    │   ├── condition
    │   │   ├── condition.component.js
    │   │   ├── condition.container.js
    │   │   └── condition.scss
    │   ├── forecast
    │   │   ├── forecast-item
    │   │   │   ├── forecast-item.js
    │   │   │   └── forecast-item.scss
    │   │   ├── forecast.component.js
    │   │   └── forecast.container.js
    │   ├── location
    │   │   ├── location.component.js
    │   │   ├── location.container.js
    │   │   └── location.scss
    │   ├── search-box
    │   │   ├── search-box.js
    │   │   └── search-box.scss
    │   └── weather-icon
    │       └── weather-icon.js
    ├── constants
    │   └── actionTypes.js
    ├── index.js
    ├── index.scss
    ├── reducers
    │   ├── condition.js
    │   ├── error.js
    │   ├── forecast.js
    │   ├── index.js
    │   ├── loading.js
    │   ├── location.js
    │   └── search-text.js
    ├── registerServiceWorker.js
    ├── stores
    │   └── configureStore.js
    └── style
        ├── color.scss
        └── variable.scss

```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
