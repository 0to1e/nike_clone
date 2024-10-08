type FeaturedItemsProps = {
    image: string;
    title: string;
    description: string;
    path:string
  };
  
export  type FeaturedItemsList = {
    [index: string]: FeaturedItemsProps;
  };