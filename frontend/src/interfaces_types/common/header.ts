export type IsectionOneList = {
  [name: string]: string;
};

export interface SectionTwoHeaderItemsList {
  [category: string]: SectionTwoHeaderSubCategory;
}

interface SectionTwoHeaderSubCategory {
  path: string;
  categories: SubCategoriesList;
}

interface SubCategoriesList {
  [subCategory: string]: SubCategoryPaths;
}
interface SubCategoryPaths {
  [subSubcategoryTitle: string]: string;
}

export type IsectionTwoMenuList = {
  [key: string]: IsectionTwoMenuItemProps;
};
type IsectionTwoMenuItemProps = {
  svgPath: string;
  isCommon: boolean;
  requireAuth: boolean;
  onSmall: boolean;
  path: string;
};
