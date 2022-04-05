import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdAddLocation } from 'react-icons/md';
import { Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Head from '../../../components/header';
import Input from '../../../components/input';
import Select from '../../../components/select';
import { Container, Header, Form, Paragraph } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../data/hooks/redux';
import {
  listAllPeriods,
  listAllClassesType,
  createClasses,
} from '../../../../data/usecases';
import { createClassSchema } from '../../../../validation/forms';
import { CreateClassesForm } from '../../../../domain/forms';

const CreateProduct: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const periods = useAppSelector((state) => state.periods);
  const classesType = useAppSelector((state) => state.classesType);

  useEffect(() => {
    listDefaultValues();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClassesForm>({
    resolver: yupResolver(createClassSchema),
  });

  const headerAction = useCallback(() => {
    history.go(-1);
  }, []);

  const listDefaultValues = () => {
    dispatch(listAllPeriods());
    dispatch(listAllClassesType());
  };

  const onSubmit = (value: CreateClassesForm) => {
    dispatch(createClasses(value, history));
  };

  return (
    <Container>
      <Header>
        <Head
          title="Cadastro"
          icon={<MdAddLocation />}
          onClick={headerAction}
          isGoBack
        />
      </Header>

      <Paragraph>
        Crie a sua próxima turma de alunos, e assim tenha acesso ao mais
        diversos relatórios para te ajudar no dia a dia.
      </Paragraph>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Qual o nome?"
          type="text"
          {...register('name')}
          error={errors.name}
        />

        <Select
          {...register('periodId')}
          items={[{ externalId: '', name: 'Qual o período?' }, ...periods.data]}
          error={errors.periodId}
        />

        <Select
          {...register('classesTypeId')}
          items={[
            { externalId: '', name: 'Qual o tipo?' },
            ...classesType.data.map((value: any) => ({
              externalId: value.externalId,
              name: value.description,
            })),
          ]}
          error={errors.classesTypeId}
        />

        <Button
          bg="#5A8DEE"
          type="submit"
          size="lg"
          isLoading={periods.isFetch}
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
