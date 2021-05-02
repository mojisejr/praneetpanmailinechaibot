import { FlexBubble, FlexMessage } from "@line/bot-sdk";

export const renderGrowingBubble = function (growingMonth: number[]) {
  const growingItems = growingMonth.map((month, index) => {
    return renderGrowingItem(month, index);
  });
  return {
    type: "flex",
    altText: "ข้อมูลเกี่ยวกับการปลูก",
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
                text: "ข้อมูลการผลิตต้นไม้",
                weight: "bold",
                size: "lg",
                color: "#52B60DFF",
                contents: [],
              },
              {
                type: "text",
                text: "ประจำปี 2563-2564",
                size: "xl",
                color: "#FA0000FF",
                contents: [],
              },
              {
                type: "text",
                text: "ข้อมูลล่าสุด",
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
            contents: growingItems, // array of growing here
          },
          {
            type: "separator",
            margin: "md",
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
              label: "โทรสอบถามเพิ่มเติม",
              text: "0929931147",
            },
          },
        ],
      },
    } as FlexBubble,
  } as FlexMessage;
};

const renderGrowingItem = function (growingMonth: number, no: number) {
  return {
    type: "box",
    layout: "horizontal",
    margin: "md",
    contents: [
      {
        type: "text",
        text: `ชุดที่ ${no + 1} อายุ`,
        size: "lg",
        color: "#52B60DFF",
        contents: [],
      },
      {
        type: "text",
        text: `${growingMonth} เดือน`,
        weight: "bold",
        size: "lg",
        contents: [],
      },
    ],
  };
};

// [
//
// ],
