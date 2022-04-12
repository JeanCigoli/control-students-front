import React, { useEffect } from 'react';
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
import { updateStudents } from '../../../../../data/usecases';

const FormSecondary: React.FC<{ data: any }> = ({ data }) => {
  const history = useHistory();
  const classes = useAppSelector((state) => state.classes);
  const students = useAppSelector((state) => state.students);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue('class', data.class);
    setValue('classesId', data.classes.externalId);
    setValue('name', data.name);
    setValue('ra', data.ra);
    setValue('school', data.school);
    setValue('dayOfWeek', data.dayOfWeek);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateSecondaryStudentsForm>({
    resolver: yupResolver(createSecondaryStudentsSchema),
  });

  const onSubmit = (value: any) => {
    dispatch(updateStudents({ id: data.externalId, ...value }, history));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Paragraph>
        Atualize os seus alunos dos cursos extracurriculares
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
        Atualizar
      </Button>
    </Form>
  );
};

export default FormSecondary;
