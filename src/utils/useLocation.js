import { useState } from 'react';

import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => {
    // Ask permition and get current location
    setIsLoading(true);
    setError();
    let hasLocationPermission = false;

    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    ).then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)'
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable'
          );
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          hasLocationPermission = true;
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
      if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
          // get current location from native GPS service
          (position) => {
            console.log('get location');
            setIsLoading(false);
            setData({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            console.log(err.code, err.message);
            setError(err.message);
            setIsLoading(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else if (!hasLocationPermission) {
        setError('Please grant location permission');
        setIsLoading(false);
      }
    });
  };

  return { data, error, isLoading, getLocation };
};
