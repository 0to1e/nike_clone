interface ISectionItems {
  [key: string]: string;
}

interface IFooterItemsList {
  [section: string]: ISectionItems;
}

export const FooterItemsList: IFooterItemsList = {
  Resources: {
    "find a store": "#",
    "become a member": "#",
    "send us feedbak": "#",
  },
  Help: {
    "get help": "#",
    "order status": "#",
    delivery: "#",
    returns: "#",
    "payment options": "#",
    "contact us on nike.com inquiries": "#",
    "contact us on all other inquiries": "#",
  },
  Company: {
    "about nike": "#",
    news: "#",
    carrers: "#",
    investors: "#",
    sustainabililty: "#",
  },
};
