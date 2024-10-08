export type IsectionOneList = {
  [name: string]: string;
};

export type IsectionTwoMenuList = {
  [key: string]: IsectionTwoMenuItemProps;
};

export type IsectionTwoMenuItemProps = {
  svgPath: string;
  isCommon: boolean;
  onSmall: boolean;
  path: string;
};
