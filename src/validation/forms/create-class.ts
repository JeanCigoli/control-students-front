import * as yup from 'yup';
import { string, uuid } from '..';

const createClassSchema = yup.object().shape({
  name: string('A turma').required('A turma é obrigatório'),
  periodId: uuid('O período').required('O período é obrigatório'),
  classesTypeId: uuid('O tipo').required('O tipo é obrigatório'),
});

export { createClassSchema };
