import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid white;

  color: ${props => props.color || 'white'};
  background: ${props => props.background || 'black'};
`;

const DropBox = ({ data }) => {
  return (
    <Select>
      {data &&
        data.length > 0 &&
        data.map(item => (
          <option value={item.value} key={item.key}>
            {item.value}
          </option>
        ))}
    </Select>
  );
};

export default DropBox;
