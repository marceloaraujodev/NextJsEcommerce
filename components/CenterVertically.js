import React from 'react'
import styled from 'styled-components';

const VerticalAlign= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

export default function CenterVertically({children}) {
  return (
    <VerticalAlign>{children}</VerticalAlign>
  )
}
