import React, { memo } from 'react';
import { InputDTO } from '../../../domain/components/input-dto';

import { Container, Error, Input } from './styled';

const InputComponent = React.forwardRef<HTMLInputElement, InputDTO>(
  (props, ref) => {
    const { name, label, type, icon, error, ...rest } = props;

    return (
      <Container>
        <Input
          placeholder={label}
          type={type}
          name={name}
          error={!!error}
          ref={ref}
          {...rest}
        />

        {icon}

        {error && <Error>{error.message}</Error>}
      </Container>
    );
  }
);

export default memo(InputComponent);
