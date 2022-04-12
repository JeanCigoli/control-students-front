import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../../data/hooks/redux';
import { LoginType } from '../../../domain/forms/login-form';
import Input from '../../components/input';
import * as Button from '../../components/button';
import { Container, Form, Paragraph } from './styled';
import { authenticationSchema } from '../../../validation/forms';
import { authentication } from '../../../data/usecases/auth/authentication';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector((state) => state.auth);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(authenticationSchema),
  });

  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (value: LoginType) => {
    dispatch(authentication(value, history));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Vamos lá.</h2>

        <Paragraph>Organize seus alunos! Entre com sua conta.</Paragraph>

        <Input
          label="Usuário"
          type="text"
          {...register('email')}
          error={errors.email}
        />

        <Input
          label="Senha"
          type={showPassword ? 'password' : 'text'}
          {...register('password')}
          error={errors.password}
          icon={
            showPassword ? (
              <IoMdEyeOff onClick={handleShowPassword} />
            ) : (
              <IoMdEye onClick={handleShowPassword} />
            )
          }
        />

        <Button.Primary
          type="submit"
          label="Entrar"
          backgroundColor="blue"
          color="white"
          disabled={loginInfo.isFetch}
          isLoading={loginInfo.isFetch}
        />
      </Form>
    </Container>
  );
};

export default Login;
