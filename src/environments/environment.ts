// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDIFJi2aK6d9uxyCJNIV4rnnVnKXYsY38I',
    authDomain: 'edu-spa.firebaseapp.com',
    databaseURL: 'https://edu-spa.firebaseio.com',
    projectId: 'edu-spa',
    storageBucket: 'edu-spa.appspot.com',
    messagingSenderId: '1024621975622'
  }
};
