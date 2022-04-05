import * as yup from 'yup';
import { string, uuid } from '..';

const createPrimaryStudentsSchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  ra: string('O ra').required('O ra é obrigatório'),
  class: string('A turma').required('A turma é obrigatório'),
  classesId: uuid('O período').required('O período é obrigatório'),
});

export { createPrimaryStudentsSchema };
