import {MenuData} from "../app/model/application-config-model";

export const Data : MenuData[] = [
  {
    caption: "خدمات کارفرمایان",
    disable: false,
    url: "",
    icon: "",
    newService: false,
    tracks: "حمایتهای کوتاه مدت",
    items: [
      {
        caption: "درخواست استفاده از خدمات غیرحضوری",
        disable: false,
        url: "/item",
        newService: false
      },
    ]
  },
  {
    caption: "حمایت های کوتاه مدت",
    disable: false,
    url: "",
    icon: "flower-outline",
    newService: false,
    tracks: "حمایتهای کوتاه مدت",
    items: [
      {
        caption: "استعلام شماره حسابهای ثبت شده",
        disable: false,
        url: "/data-table",
        newService: false
      },
      {
        caption: "اعلام شماره حساب بانکی",
        disable: false,
        url: "/badge",
        newService: false
      },
    ]
  },
  {
    caption: "خدمات کارفرمایان",
    disable: false,
    url: "/button",
    icon: "",
    newService: false,
    tracks: "حمایتهای کوتاه مدت",
  },

]


