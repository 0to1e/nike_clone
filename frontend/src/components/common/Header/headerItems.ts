import {
  IsectionOneList,
  IsectionTwoMenuList,
} from "../../../interfaces_types/Home/header";

export const sectionOneNavigation: IsectionOneList = {
  "Find a store": "",
  Help: "",
  Login: "",
  "Sign Up": "",
};

export const sectionTwoNavigation: IsectionTwoMenuList = {
  Search: {
    svgPath:
      "M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853",
    isCommon: true,
    onSmall: true,
    path: "#",
  },
  User: {
    svgPath:
      "M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z",
    path: "#",
    isCommon: false,
    onSmall: true,
  },
  Favourites: {
    svgPath:
      "M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451",
    isCommon: false,
    onSmall: false,
    path: "#",
  },
  Cart: {
    svgPath:
      "M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5",
    isCommon: true,
    onSmall: true,
    path: "#",
  },
  Options: {
    svgPath: "M21 5.25H3M21 12H3m18 6.75H3",
    isCommon: false,
    onSmall: true,
    path: "#",
  },
};
