import { User } from 'firebase/app';

export interface AuthAccount extends User {
  uid: string;
}
