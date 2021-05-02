import { Product } from "../models/product.model";
import { Company } from "../models/company.model";
import { Crop } from "../models/crop.model";
import * as admin from "firebase-admin";
import { firebaseConfig } from "./../setting";
import * as mapper from "./../mapper/mapper";
import * as _ from "lodash";

admin.initializeApp(firebaseConfig);
export interface AppState {
  allProducts: Product[];
  companyData: Company;
  currentCropData: Crop;
}
export interface IDatabase {
  fetchAllProducts(): Promise<void>;
  fetchCompanyData(): Promise<void>;
  fetchCropData(): Promise<void>;
  getAllProducts(): Product[];
  // getProductByKey(key: string): (Product | undefined)[];
  getProductByData(data: string): Product[];
  getCompany(): Company;
  getCurrentCropData(): Crop;
  getGrowingMonth(): number[] | undefined;
}

class Database implements IDatabase {
  private appState: AppState;
  constructor() {
    this.appState = {
      allProducts: [] as Product[],
      companyData: {} as Company,
      currentCropData: {} as Crop,
    };
  }

  getState(): AppState {
    return this.appState;
  }
  async fetchAllProducts() {
    try {
      const response = await admin.firestore().collection("products").get();
      const snapshotChange = response.docChanges();
      let allProducts = snapshotChange.map((snapshot) =>
        mapper.toProduct(snapshot.doc.data())
      );
      if (this.appState.allProducts.length <= 0) {
        this.appState.allProducts.push(...allProducts);
      }
      // console.log("allProducts in fetch", this.appState.allProducts);
    } catch (error) {
      console.log(error);
      throw new Error("get all product error");
    }
  }

  async fetchCompanyData() {
    try {
      const response = await admin
        .firestore()
        .collection("company")
        .doc("profile")
        .get();
      const companyProfile = mapper.toCompany(response.data());
      this.appState.companyData =
        this.appState.companyData != null
          ? companyProfile
          : this.appState.companyData;
    } catch (error) {
      console.log(error);
      throw new Error("get company data error");
    }
  }

  async fetchCropData() {
    try {
      const lastYear = new Date().getFullYear() - 1;
      const toThaiYear = lastYear + 543;
      const response = await admin
        .firestore()
        .collection("crops")
        .where("year", "==", toThaiYear)
        .get();
      const crops = response.docChanges().map((snap) => snap.doc.data());
      this.appState.currentCropData =
        this.appState.currentCropData != null
          ? mapper.toCrop(crops[0])
          : this.appState.currentCropData;
    } catch (error) {
      console.log(error);
      throw new Error("get current crop data error");
    }
  }

  getAllProducts(): Product[] {
    return this.appState.allProducts;
  }

  getProductByData(data: string) {
    return this.appState.allProducts.filter((product) => {
      return Object.values(product).includes(data);
    });
  }

  getCompany(): Company {
    return this.appState.companyData;
  }

  getCurrentCropData(): Crop {
    return this.appState.currentCropData;
  }

  getGrowingMonth() {
    return this.appState.currentCropData.seeds?.map((seed) => {
      const growingTime = seed.growing.toDate().getTime();
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - growingTime;
      return new Date(timeDiff).getMonth();
    });
  }
}

export default new Database();
