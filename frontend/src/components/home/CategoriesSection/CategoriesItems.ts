type TCategories = {
  [subCategories: string]: string;
};

export type ICategoriesList = {
  [Categories: string]: TCategories;
};

export const CategoriesItemsList: ICategoriesList = {
  Icons: {
    "Air Force 1": "#",
    Huarache: "#",
    "Air Max 90": "#",
    "Air Max 97": "#",
    "Air Max 270": "#",
    "Air Max 720": "#",
    "All Air Max": "#",
    Vapormax: "#",
  },
  Shoes: {
    "All Shoes": "#",
    "Custom Shoes": "#",
    "Jordan Shoes": "#",
    "Running Shoes": "#",
    "Basketball Shoes": "#",
    "Football Shoes": "#",
    "Gym & Training Shoes": "#",
    "Lifestyle Shoes": "#",
  },
  Clothing: {
    "All Clothing": "#",
    "Modest Wear": "#",
    "Hoodies and Pullovers": "#",
    "Shirts and Tops": "#",
    Jackets: "#",
    "Compression & Nike Pro": "#",
    "Trousers & Leggings": "#",
    Shorts: "#",
  },
  Kids: {
    "Infant & Toddler Shoes": "#",
    "Kids' Shoes": "#",
    "Kids' Jordan Shoes": "#",
    "Kids' Basketball Shoes": "#",
    "Kids' Running Shoes": "#",
    "Kids' Clothing": "#",
    "Kids' Backpacks": "#",
    "Kids' Socks": "#",
  },
};
