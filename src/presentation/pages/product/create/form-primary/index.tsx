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
import { CreatePrimaryStudentsForm } from '../../../../../domain/forms';
import { createPrimaryStudentsSchema } from '../../../../../validation/forms';
import { createStudents } from '../../../../../data/usecases';

import { Form, Paragraph } from '../styled';

const FormPrimary: React.FC = () => {
  const history = useHistory();
  const classes = useAppSelector((state) => state.classes);
  const students = useAppSelector((state) => state.students);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePrimaryStudentsForm>({
    resolver: yupResolver(createPrimaryStudentsSchema),
  });

  const onSubmit = (value: any) => {
    dispatch(createStudents(value, history));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Paragraph>
        Cadastre os seus alunos que estão cursando o período normal
      </Paragraph>

      <Input
        label="Nome"
        type="text"
        {...register('name')}
        error={errors.name}
      />

      <Input label="R.A" type="number" {...register('ra')} error={errors.ra} />

      <Input
        label="Classe. ex: (3º A)"
        type="text"
        {...register('class')}
        error={errors.class}
      />

      <Select
        {...register('classesId')}
        items={[
          { externalId: '', name: 'Qual o período?' },
          ...classes.data
            .filter((value: any) => value.type.name === 'PRIMARY')
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

export default FormPrimary;
