export type GraphicsReducer = {
  isFetch: boolean;
  data: {
    studentsAll: {
      students: number;
      vacancies: number;
    };
    classes: {
      externalId: string;
      name: string;
      period: string;
      students: number;
    }[];
  };
  [params: string]: any;
};
