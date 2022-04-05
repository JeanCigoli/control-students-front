export type ClassesTypeReducer = {
  isFetch: boolean;
  data: {
    externalId: string;
    name: string;
    description: string;
  }[];
  [params: string]: any;
};
