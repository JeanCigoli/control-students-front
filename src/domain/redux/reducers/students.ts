export type StudentsReducer = {
  isFetch: boolean;
  data: {
    externalId: string;
    name: string;
    ra: string;
    class: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    classes: {
      externalId: string;
      name: string;
      period: string;
    };
  }[];
  [params: string]: any;
};
