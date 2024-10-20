export type IsectionOneList = {
  [name: string]: string;
};

export type IsectionTwoMenuList = {
  [key: string]: IsectionTwoMenuItemProps;
};

export interface SectionTwoHeaderItemsList {
  [category: string]: string | SectionTwoHeaderSubCategory;
}


interface SectionTwoHeaderSubCategory {
  [subCategory: string]: SubCategoryPaths;
}

interface SubCategoryPaths {
  [subSubcategory: string]: string;
}

type IsectionTwoMenuItemProps = {
  svgPath: string;
  isCommon: boolean;
  onSmall: boolean;
  path: string;
};