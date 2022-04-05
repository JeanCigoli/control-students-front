import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../data/hooks/redux';
import Input from '../../../../components/input';
import Select from '../../../../components/select';
import { createSecondaryStudentsSchema } from '../../../../../validation/forms';
import { CreateSecondaryStudentsForm } from '../../../../../domain/forms';

import { Divisor, Form, Paragraph } from '../styled';

import { getDayOfWeek } from '../../../../../utils/date';
import { createStudents } from '../../../../../data/usecases';

const FormSecondary: React.FC = () => {
  const history = useHistory();
  const classes = useAppSelector((state) => state.classes);
  const students = useAppSelector((state) => state.students);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSecondaryStudentsForm>({
    resolver: yupResolver(createSecondaryStudentsSchema),
  });

  const onSubmit = (value: any) => {
    dispatch(createStudents(value, history));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Paragraph>
        Cadastre os seus alunos dos cursos extracurriculares
      </Paragraph>

      <Input
        label="Nome"
        type="text"
        {...register('name')}
        error={errors.name}
      />

      <Input
        label="Escola"
        type="text"
        {...register('school')}
        error={errors.school}
      />

      <Divisor>
        <Input
          label="R.A"
          type="number"
          {...register('ra')}
          error={errors.ra}
        />

        <Input
          label="Turma"
          type="text"
          {...register('class')}
          error={errors.class}
        />
      </Divisor>

      <Select
        {...register('dayOfWeek')}
        items={[{ externalId: '', name: 'Dia da semana' }, ...getDayOfWeek()]}
        error={errors.dayOfWeek}
      />

      <Select
        {...register('classesId')}
        items={[
          { externalId: '', name: 'Qual o período?' },
          ...classes.data
            .filter((value: any) => value.type.name === 'SECONDARY')
            .map((value: any) => ({
              externalId: value.externalId,
              name: `${value.name} - ${value.period}`,
            })),
        ]}
        error={errors.classesId}
      />

      <Button bg="#5A8DEE" type="submit" size="lg" isLoading={students.isFetch}>
        Cadastrar
      </Button>
    </Form>
  );
};

export default FormSecondary;
