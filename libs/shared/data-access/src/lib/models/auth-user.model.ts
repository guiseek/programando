import { UserInfo } from 'firebase/app';

export interface AuthUser extends UserInfo {
  uid: string;
}
