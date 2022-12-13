import React, {useEffect} from 'react';
import rudderClient, {
  RUDDER_LOG_LEVEL,
} from '@rudderstack/rudder-sdk-react-native';
import Router from './src/router/router';

const App = () => {
  useEffect(() => {
    creatingClient();
  }, []);

  async function creatingClient() {
    const configs = {
      dataPlaneUrl: 'https://appinventixcmj.dataplane.rudderstack.com',
      trackAppLifecycleEvents: true,
      logLevel: RUDDER_LOG_LEVEL.INFO,
      recordScreenViews: true,
    };
    // First import the Rudderstack React-Native SDK in the App.js file.

    // Next, use the below snippet to initialise the SDK.
    await rudderClient.setup('2IIdYHFlNOflu5LYL8LqQDS0UKe', configs);
  }

  return <Router />;
};

export default App;
