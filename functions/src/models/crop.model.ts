import { firestore } from "firebase-admin";
export interface Crop {
  year: number;
  seeds?: Seed[];
}

export interface Seed {
  growing: firestore.Timestamp;
}
