import { LocationMessage } from "@line/bot-sdk";

export interface ILocationMessage {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
}
export const renderLocationMessage = function (data: ILocationMessage) {
  return {
    type: "location",
    title: data.title,
    address: data.address,
    latitude: data.latitude,
    longitude: data.longitude,
  } as LocationMessage;
};
