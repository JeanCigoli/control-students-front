import { ReactElement } from 'react';

export interface NavItemDTO {
  icon: ReactElement;
  active: boolean;
  link: string;
  number: number;
  onClick: (number: number) => void;
}
