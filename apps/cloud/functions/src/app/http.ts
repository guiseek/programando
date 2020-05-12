import { https } from './config';

const likes = {};

export const like = https.onRequest((request, response) => {
  // console.log(request.);

  console.log(request.body);


  response.send('Hello from Firebase!');
});