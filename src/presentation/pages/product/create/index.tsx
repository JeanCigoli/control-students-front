import React, { useState, useCallback } from 'react';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Head from '../../../components/header';
import Input from '../../../components/input';
import {
  Container,
  Header,
  Form,
  Divisor,
  Box,
  File,
  Paragraph,
} from './styled';
import { convertIntoBase64 } from '../../../../utils/file';

const CreateProduct: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>({});

  const onFile = useCallback(
    async (file: React.ChangeEvent<HTMLInputElement>) => {
      const base64 = await convertIntoBase64(file.target.files);
      setValue('image', file.target.files);
      setImage(base64 as string);
    },
    [image]
  );

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <Container>
      <Header>
        <Head title="Cadastro de produtos" icon={<RiInboxArchiveFill />} />
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Divisor>
          <Box>
            <File>
              <label htmlFor="image">
                {image ? (
                  <img src={image} alt="Logo do produto" />
                ) : (
                  <FaCloudUploadAlt />
                )}

                <input
                  id="image"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  {...register('image')}
                  onChange={onFile}
                />
              </label>
            </File>

            <Paragraph>Faça upload de uma foto do produto</Paragraph>
          </Box>

          <Box>
            <Input
              label="Nome do produto"
              type="text"
              {...register('name')}
              error={errors.name}
            />

            <Input
              label="Preço de compra"
              type="number"
              {...register('valueBuy')}
              error={errors.valueBuy}
            />

            <Input
              label="Preço de venda"
              type="number"
              {...register('valueSale')}
              error={errors.valueSale}
            />
          </Box>
        </Divisor>

        <Divisor>
          <Box>
            <Button type="submit"> Enviar o Formulário </Button>
          </Box>
        </Divisor>
      </Form>
    </Container>
  );
};

export default CreateProduct;
