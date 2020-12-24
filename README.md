# Weather
just another weather app

### Packages

* `apisauce` - api calling
* `lottie-react-native` - to add lottie animations
* `react-native-dotenv` - access `.env` VARS in code
* `react-native-geolocation-service` - get location by native apis
* `react-native-permissions` - ask native permissions
* `react-native-responsive-fontsize` - dynamic font size for diff screen sizes
* `react-native-simple-toast` - simple toast popup for errors

* `redux` `react-redux` - state management


### Usage
```sh
yarn install
yarn run android
```

### Notes

* Swipe down to relaod
* Toast popup in error screen for detailed errors
* `Redux` used in `main` branch and `React Context` is used in `context-api` branch
* Weather icons are lottie animations

### Custom Hooks

#### useLocation
```js
const {data, error, isLoading, getLocation} = useLocation();
```

#### useWeather
```js
const { weather, forecast, error, isLoading, getWeather } = useWeather();
```

### Redux and React.Context state

```js
const { weather, forecast, error, isLoading } = state;
```
