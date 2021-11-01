import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  width: auto;
  display: inline-block;
  position: relative;
`;

const SelectMedium = styled.div`
  &:before {
    color: #fff;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
    content: '\\e896';
    font-size: 0.75rem;
    left: 0.5rem;
    font-family: nf-icon;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    color: #fff;
    transform: translateY(-50%);
    top: 50%;
    right: 10px;
    font-family: nf-icon;
    font-size: 6px;
    content: '\\e898';
    position: absolute;
    pointer-events: none;
  }
`;

const Select = styled.select`
  padding-left: 1.375rem;
  padding-right: 1.375rem;
  line-height: 1.3em;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  color: #fff;
  font-size: 0.875rem;
  text-indent: 0;
  appearance: none;
  border-radius: 2px;
  width: 100%;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    padding: 0.5rem 1.375rem;
  }
`;

const DropBox = ({ data }) => {
  return (
    <SelectWrapper>
      <SelectMedium>
        <Select>
          {data &&
            data.length > 0 &&
            data.map(item => (
              <option value={item.value} key={item.key}>
                {item.value}
              </option>
            ))}
        </Select>
      </SelectMedium>
    </SelectWrapper>
  );
};

export default DropBox;
