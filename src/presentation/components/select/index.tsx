import React, { memo } from 'react';
import { SelectDTO } from '../../../domain/components/select-item-dto';

import { Container, Error, Select } from './styled';

const InputComponent = React.forwardRef<HTMLSelectElement, SelectDTO>(
  (props, ref) => {
    const { name, label, error, items, ...rest } = props;

    return (
      <Container>
        <Select name={name} error={!!error} ref={ref} {...rest}>
          {items.map((value) => (
            <option key={value.externalId} value={value.externalId}>
              {value.name}
            </option>
          ))}
        </Select>

        {error && <Error>{error.message}</Error>}
      </Container>
    );
  }
);

export default memo(InputComponent);
