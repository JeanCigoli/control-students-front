import { format } from 'date-fns';

export const getDateCurrent = () => format(new Date(), 'dd-MM-yyyy');

export const getDayOfWeek = () => [
  { externalId: 'Segunda', name: 'Segunda-feira' },
  { externalId: 'Terça', name: 'Terça-feira' },
  { externalId: 'Quarta', name: 'Quarta-feira' },
  { externalId: 'Quinta', name: 'Quinta-feira' },
  { externalId: 'Sexta', name: 'Sexta-feira' },
];
