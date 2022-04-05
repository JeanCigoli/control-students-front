export type PeriodsReducer = {
  isFetch: boolean;
  data: {
    externalId: string;
    name: string;
  }[];
  [params: string]: any;
};
