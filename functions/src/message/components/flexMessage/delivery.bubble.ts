import { FlexBubble, FlexMessage } from "@line/bot-sdk";

export const renderDeliveryBubble = function () {
  return {
    type: "flex",
    altText: "ข้อมูลเกี่ยวกับการขนส่ง",
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
                text: "ส่งยังไง ?",
                weight: "bold",
                size: "xxl",
                color: "#DF2A2AFF",
                contents: [],
              },
            ],
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "md",
            contents: [
              {
                type: "text",
                text: "hello, world",
                wrap: true,
                contents: [
                  {
                    type: "span",
                    text: "เนื่องจากทางร้านยังไม่สามารถ ขนส่งทางไปรษณีได้",
                    size: "xl",
                    color: "#43BC2BFF",
                    weight: "bold",
                  },
                  {
                    type: "span",
                    text:
                      "ทางร้านมี บริการขนส่งได้ ระหว่างจังหวัดใกล้เคียงดังต่อไปนี้",
                    size: "lg",
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                margin: "lg",
                contents: [
                  {
                    type: "text",
                    text: "+",
                    size: "xl",
                    color: "#FC1100FF",
                    flex: 1,
                    contents: [],
                  },
                  {
                    type: "text",
                    text: "ภายในจังหวัดจันทบุรี",
                    size: "lg",
                    flex: 6,
                    contents: [],
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                margin: "lg",
                contents: [
                  {
                    type: "text",
                    text: "+",
                    size: "xl",
                    color: "#FC1100FF",
                    flex: 1,
                    contents: [],
                  },
                  {
                    type: "text",
                    text: "จังหวัดระยอง",
                    size: "lg",
                    flex: 6,
                    contents: [],
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                margin: "lg",
                contents: [
                  {
                    type: "text",
                    text: "+",
                    size: "xl",
                    color: "#FC1100FF",
                    flex: 1,
                    contents: [],
                  },
                  {
                    type: "text",
                    text: "จังหวัดตราด",
                    size: "lg",
                    flex: 6,
                    contents: [],
                  },
                ],
              },
            ],
          },
          {
            type: "box",
            layout: "vertical",
            margin: "sm",
            contents: [
              {
                type: "text",
                text:
                  "*** เมื่อสั่งซื้อตั้งแต่ 500 ต้นขึ้นไป (สามารถมาคัดไว้แล้วให้เราขนไปส่งได้)",
                wrap: true,
                contents: [],
              },
            ],
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
              type: "postback",
              label: "โทรสอบถาม",
              text: "0929931147",
              data: "phone",
            },
          },
        ],
      },
    } as FlexBubble,
  } as FlexMessage;
};
