type MembershipItemsProps = {
  image: string;
  title: string;
  path: string;
  action: string;
};

export type MembershipItemsList = {
  [benifit: string]: MembershipItemsProps;
};
