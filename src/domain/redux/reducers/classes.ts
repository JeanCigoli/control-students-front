export type ClassesReducer = {
  isFetch: boolean;
  data: {
    externalId: string;
    name: string;
    period: string;
  }[];
  [params: string]: any;
};
