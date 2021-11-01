import React from 'react';
import styled from 'styled-components';
import DropBox from '../atoms/DropBox.jsx';

const LangSelectionContainer = styled.div`
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    margin-right: 2rem;
  }
  display: inline-block;
  margin: 0 0.75rem;
`;

const LangSelection = ({ data }) => {
  return (
    <LangSelectionContainer>
      <DropBox data={data} />
    </LangSelectionContainer>
  );
};

export default LangSelection;
