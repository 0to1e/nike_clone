type NewItemsProps = {
    image: string;
    title: string;
    category:string;
    price: number;
    path:string
  };
  
export  type NewItemsList = {
    [index: string]: NewItemsProps;
  };