export interface SelectDTO {
  name: string;
  error: any;
  label: string;
  items: {
    externalId: any;
    name: string;
  }[];
  [propName: string]: any;
}
