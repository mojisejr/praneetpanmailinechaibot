import { FlexBubble, FlexMessage } from "@line/bot-sdk";

export const renderInterestingQA = function () {
  return {
    type: "flex",
    altText: "ข้อมูลคำถามที่น่าสนใจ",
    contents: {
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
                text: "รายการคำถามน่าสนใจ",
                weight: "bold",
                size: "xl",
                color: "#FF0000FF",
                contents: [],
              },
              {
                type: "text",
                text: "กดที่คำถามที่ต้องการเพื่อถามโดยไม่ต้องพิมพ์",
                wrap: true,
                contents: [],
              },
            ],
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "มีอะไรขายอยู่บ้าง?",
              text: "ดูทั้งหมด",
            },
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "ร้านอยู่ไหน ?",
              text: "แผนที่ร้าน",
            },
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "บริการขนส่ง/ปณ. ?",
              text: "ส่งยังไง",
            },
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "ขอเบอร์โทรศัพท์",
              text: "0929931147",
            },
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "facebook page",
              uri: "https://www.facebook.com/ptPlant",
            },
          },
        ],
      },
    } as FlexBubble,
  } as FlexMessage;
};
