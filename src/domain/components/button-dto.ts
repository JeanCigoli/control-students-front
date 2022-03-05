import React from 'react';

export interface ButtonDTO {
  color: 'white' | 'black';
  label: string;
  backgroundColor: 'gray' | 'blue';
  type: 'button' | 'submit' | 'reset' | undefined;
  icon?: React.ReactElement;
  isLoading?: boolean;
  [propName: string]: any;
}
