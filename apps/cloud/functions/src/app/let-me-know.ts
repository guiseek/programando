import { environment } from '@webapp/env';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://head-tech.firebaseio.com'
});

// const deviceToken = functions.config().dev_motivator.device_token;
const { dev_motivator } = functions.config();
const  {
  device_token = environment.deviceToken
} = dev_motivator || {}

export const appinstalled = functions.analytics.event('first_visit').onLog((event) => {
  const user = event.user;
  const payload = {
    notification: {
      title: 'Usuário novo no blog! \uD83D\uDE43',
      body: `Usa ${user.deviceInfo.mobileModelName}, é de ${user.geoInfo.city}, ${user.geoInfo.country}`,
    }
  };

  return admin.messaging().sendToDevice(device_token, payload);
});
export const pageview = functions.analytics.event('page_view').onLog((event) => {
  const user = event.user;
  const payload = {
    notification: {
      title: 'Viu, só pra avisar.',
      body: `Tem gente navegando no ${user.appInfo.appId}...`,
    }
  };
  return admin.messaging().sendToDevice(device_token, payload);
});
export const sessionstart = functions.analytics.event('session_start').onLog((event) => {
  const user = event.user;
  const payload = {
    notification: {
      title: 'Start!',
      body: `Nova sessão no ${user.appInfo.appId}...`,
    }
  };
  return admin.messaging().sendToDevice(device_token, payload);
})
// export const appremoved = analytics.event('app_remove').onLog((event) => {
//   const user = event.user;
//   const payload = {
//     notification: {
//       title: 'You lost a user \uD83D\uDE1E',
//       body: `${user.deviceInfo.mobileModelName} from ${user.geoInfo.city}, ${user.geoInfo.country}`,
//     }
//   };

//   return admin.messaging().sendToDevice(deviceToken, payload);
// });