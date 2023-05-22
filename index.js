import { registerRootComponent } from "expo";
import React, { useState } from "react";
import App from "./App";

import * as Toast from "react-native-toast-message/lib/src/Toast";
import { MyProvider } from "./src/context";

const provider = () => {
  return (
    <MyProvider>
      <App />
      <Toast.Toast />
    </MyProvider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => provider);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
