import * as yup from 'yup';
import { dayOfWeek, string, uuid } from '..';

const createSecondaryStudentsSchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  ra: string('O ra').required('O ra é obrigatório'),
  school: string('A escola').required('A escola é obrigatório'),
  dayOfWeek,
  class: string('A turma').required('A turma é obrigatório'),
  classesId: uuid('O período').required('O período é obrigatório'),
});

export { createSecondaryStudentsSchema };
