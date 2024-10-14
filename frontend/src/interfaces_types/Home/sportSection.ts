type SportItemsProps = {
  image: string;
  path: string;
};

export type SportItemsList = {
  [sport: string]: SportItemsProps;
};
