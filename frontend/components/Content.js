import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex-grow: 1;
`;


export default function Content({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
