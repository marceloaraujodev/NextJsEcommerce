import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  
  img{
    width: 100%;
  }
`;

export default function Featured2() {
  return (
    <StyledDiv>
      <img src="/front.jpg" alt="" />
    </StyledDiv>
  )
}
