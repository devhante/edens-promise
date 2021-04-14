import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  height: 4rem;
  background-color: #efbbcf;
  box-shadow: 0 0.1875rem 0.385rem rgba(0, 0, 0, 0.16);
`;

const Title = styled.div`
  color: #8675a9;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

function Header({ title, onSetTitle }) {
  return (
    <Root>
      <Title>{title}</Title>
    </Root>
  );
}

export default Header;
