import * as introduction from "./introduction.quickreply";
import * as sellWhat from "./sellwhat.quickreply";
import * as contact from "./contact.quickreply";
import { renderProductCarousel } from "./../flexMessage/product.carousel";
import { Common } from "./../common/common.message";
import { IDatabase } from "./../../../services/database.service";
import { ILocationMessage } from "../common/location.message";
import { renderDeliveryBubble } from "../flexMessage/delivery.bubble";
import { renderInterestingQA } from "../flexMessage/interestingQA.bubble";
import { renderGrowingBubble } from "../flexMessage/growing.bubble";

export interface IQuickReplyInput {
  intro: string;
  sellWhat: string;
  phone: string;
  contact: string;
  map: string;
  delivery: string;
  seeEveryThing: string;
  detail: string;
  choosing: string;
  interestingQA: string;
  age: string;
}

export class QuickReplyComponents {
  private qMessage: IQuickReplyInput;

  constructor(private db: IDatabase) {
    this.qMessage = {
      intro:
        "สวัสดีครับน้องคือระบบอัตโนมัติรับหน้าที่ดูแลระหว่างที่รอเจ้าของร้านมาตอบ อยากรู้อะไรแนะนำได้ครับ",
      sellWhat: "มีอะไรขายบ้าง",
      phone: "ขอเบอร์โทรศัพท์",
      contact: "ช่องทางติดต่อ",
      map: "แผนที่ร้าน",
      delivery: "ส่งยังไง",
      seeEveryThing: "ดูทั้งหมด",
      detail: "แยกสายพันธุ์หรือดูทั้งหมดเลยดี",
      choosing: "เลือกสายพันธุ์ที่ต้องการ",
      interestingQA: "ขอรายการคำถาม",
      age: "ขอข้อมูลอายุต้น",
    };
  }

  render(message: string) {
    if (message == this.qMessage.intro) {
      return this.introduction();
    } else if (message == this.qMessage.sellWhat) {
      return this.sellWhat();
    } else if (message == this.qMessage.seeEveryThing) {
      return this.seeEveryThing();
    } else if (message == this.qMessage.phone) {
      return Common.renderCommonMessage(this.db.getCompany().phone[0]);
    } else if (message == this.qMessage.contact) {
      return this.contact();
    } else if (message == this.qMessage.map) {
      const location: ILocationMessage = {
        title: this.db.getCompany().companyName,
        address: this.db.getCompany().addressLong,
        latitude: this.db.getCompany().latitude,
        longitude: this.db.getCompany().longitude,
      };
      return Common.renderLocationMessage(location);
    } else if (message == this.qMessage.delivery) {
      return renderDeliveryBubble();
    } else if (message == this.qMessage.interestingQA) {
      return renderInterestingQA();
    } else if (message == this.qMessage.age) {
      return renderGrowingBubble(this.db.getGrowingMonth()!);
    }
    return this.introduction();
  }

  introduction() {
    return introduction.renderIntroductionQuickReply(this.qMessage.intro);
  }

  seeByData(data: string) {
    return renderProductCarousel(
      this.db.getProductByData(data),
      this.db.getCurrentCropData(),
      this.db.getCompany()
    );
  }

  match(message: string): boolean {
    const founded = Object.values(this.qMessage).find(
      (value) => value == message
    );
    return founded ? true : false;
  }

  private sellWhat() {
    return sellWhat.renderSellWhatQuickReply(this.qMessage.sellWhat);
  }
  private seeEveryThing() {
    return renderProductCarousel(
      this.db.getAllProducts(),
      this.db.getCurrentCropData(),
      this.db.getCompany()
    );
  }

  private contact() {
    return contact.renderContactQuickReply(this.qMessage.contact);
  }
}
