import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const FirebaseModuleProvider = (config: FirebaseOptions) => {
  return [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ];
};
