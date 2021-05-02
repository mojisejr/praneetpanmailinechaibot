import { Company } from "../models/company.model";
import { Product } from "./../models/product.model";
import { Crop } from "./../models/crop.model";

export const toProduct = (data: any) => {
  if (!data) {
    throw new Error("data object cannot be null or undefined");
  }
  return {
    name: data.name,
    year: data.year,
    priceMin: data.price_min,
    priceMax: data.price_max,
    type: data.type,
    size: data.size,
    detail: data.detail,
    height: data.height,
  } as Product;
};

export const toCompany = (data: any) => {
  if (!data) {
    throw new Error("data object cannot be null or undefined");
  }

  return {
    addressEng: data.address_eng,
    addressLong: data.address_long,
    addressShot: data.address_shot,
    amphoe: data.amphoe,
    tambon: data.tambon,
    province: data.province,
    companyName: data.company_name,
    companyNumber: data.company_number,
    phone: [...data.phone],
    facebook: data.facebook,
    zip: data.zip,
    latitude: data.lat,
    longitude: data.lon,
  } as Company;
};

export const toCrop = (data: any) => {
  if (!data) {
    throw new Error("data object cannot be null or undefined");
  }
  return {
    seeds: data.seeds,
    year: data.year,
  } as Crop;
};
