import { Company } from "../../../models/company.model";
import { Crop } from "../../../models/crop.model";
import { Product } from "../../../models/product.model";
import { FlexBubble } from "@line/bot-sdk";

export const renderProductBubble = function (
  product: Product,
  crop: Crop,
  company: Company
) {
  return {
    type: "bubble",
    direction: "ltr",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: product.name,
              weight: "bold",
              size: "xl",
              color: "#52B60DFF",
              align: "start",
              contents: [],
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: product.detail,
              weight: "bold",
              color: "#FA0000FF",
              align: "start",
              contents: [],
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "md",
          contents: [
            {
              type: "text",
              text: `ต้นละ ${product.priceMin} บาท`,
              weight: "bold",
              size: "3xl",
              contents: [],
            },
          ],
        },
        {
          type: "separator",
          margin: "xl",
        },
        {
          type: "box",
          layout: "horizontal",
          margin: "lg",
          contents: [
            {
              type: "text",
              text: "สูง",
              size: "lg",
              color: "#9C9A9AFF",
              flex: 1,
              contents: [],
            },
            {
              type: "text",
              text: `${product.height} เซนติเมตร`,
              size: "lg",
              color: "#FA0000FF",
              flex: 1,
              align: "start",
              contents: [],
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            {
              type: "text",
              text: "ไม้ปี",
              size: "lg",
              color: "#9C9A9AFF",
              flex: 1,
              contents: [],
            },
            {
              type: "text",
              text: `${crop.year}`,
              size: "lg",
              color: "#FA0000FF",
              flex: 1,
              contents: [],
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "อยู่ในถุงเบอร์",
              size: "lg",
              color: "#9C9A9AFF",
              contents: [],
            },
            {
              type: "text",
              text: product.size,
              size: "lg",
              color: "#FA0000FF",
              contents: [],
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "ยังเหลือ?",
              size: "lg",
              color: "#9C9A9AFF",
              contents: [],
            },
            {
              type: "text",
              text: product.have ? "หมด" : "ยังเหลือ",
              size: "lg",
              color: "#FA0000FF",
              contents: [],
            },
          ],
        },
        {
          type: "separator",
          margin: "lg",
        },
        {
          type: "text",
          text: "มาคัดเองที่แปลง หรือให้เราคัดให้",
          color: "#9C9A9AFF",
          margin: "md",
          wrap: true,
          contents: [],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "button",
          action: {
            type: "message",
            label: "โทรสั่ง / สอบถาม",
            text: company.phone[0],
          },
        },
      ],
    },
  } as FlexBubble;
};
// export const renderProductBubble = function (
//   product: Product,
//   crop: Crop,
//   company: Company
// ) {
//   const bubble = {
//     type: "bubble",
//     body: {
//       type: "box",
//       layout: "vertical",
//       contents: [
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: product.name,
//               weight: "bold",
//               size: "xl",
//               color: "#52B60DFF",
//               align: "start",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           contents: [
//             {
//               type: "text",
//               text: product.detail,
//               weight: "bold",
//               color: "#FA0000FF",
//               align: "start",
//             },
//           ],
//         },
//         {
//           type: "box",
//           layout: "vertical",
//           margin: "md",
//           contents: [
//             {
//               type: "text",
//               text: `ต้นละ ${product.priceMin} บาท`,
//               weight: "bold",
//               size: "3xl",
//             },
//           ],
//         },
//       ],
//     },
//   } as FlexBubble;
//   return bubble;
// };
