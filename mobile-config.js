App.accessRule('*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('.gstatic.com');
// App.accessRule('http://duot.co/*');
App.accessRule('admin.cabi.io/*');
App.accessRule('*.cabi.io/*')
// This section sets up some basic app metadata,
// the entire section is optional.
// App.info({
//   id: 'cabi',
//   name: 'cabi',
//   description: 'cabi',
//   author: 'duot.io',
//   email: 'adel@duot.io',
//   website: 'duot.co'
// });d

// Set up resources such as icons and launch screens.
//App.icons({
  //'iphone': 'icons/icon-60.png',
  //'iphone_2x': 'icons/icon-60@2x.png',
  // ... more screen sizes and platforms ...
//});

App.launchScreens({
  // Android
  'android_ldpi_portrait': 'resources/splash/cabisplash.png',
  'android_ldpi_landscape': 'resources/splash/cabisplash.png',
  'android_mdpi_portrait': 'resources/splash/cabisplash.png',
  'android_mdpi_landscape': 'resources/splash/cabisplash.png',
  'android_hdpi_portrait': 'resources/splash/cabisplash.png',
  'android_hdpi_landscape': 'resources/splash/cabisplash.png',
  'android_xhdpi_portrait': 'resources/splash/cabisplash.png',
  'android_xhdpi_landscape': 'resources/splash/cabisplash.png'

  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xfff00fff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'android');
