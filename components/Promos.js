import Center from './Center';
import Title from './Title';
import styled from 'styled-components';
import ProductBox from './ProductBox';

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto; 
  margin-bottom: 40px;
  grid-template-rows: auto auto;
  
  @media screen and (min-width: 768px) {
    /* min-height: 500px; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin-bottom: 80px;
    margin-top: 80px;
  }
`;

const GridBox1 = styled.div`
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const GridBox2 = styled.div`
  padding: 12px 60px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  p {
    margin-bottom: 0;
  }
`;
const Gridbox2Title = styled.p`
  font-size: 2rem;
  line-height: 1.8rem;
  font-weight: 600;
`;
const Gridbox2TitleSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Gridbox2TitleP = styled.p`
  font-size: 0.78rem;
`;
const Gridbox3 = styled.div`
  background-color: white;
  border-radius: 10px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover; 
    max-width: 100%;
  }
  @media screen and (min-width: 768px){
    justify-content: space-between;
    grid-column: 1 / span 2;
    justify-content: space-between;
    flex-direction: row;
    
    img {
     /* position: absolute; */
     top: 0;
     right: -130px;
     max-width: 600px;
     /* height: 400px; */
     object-fit: cover;
  } 
  }
`;

const Gridbox3Left = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 20px; */
  margin: 20px;
`;
const Gridbox3LeftTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;
const Gridbox3LeftTitleSub = styled.span`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 15px;
`;
const Gridbox3LeftSpan = styled.span`
  font-size: .6rem;
  text-align: center;
`;

const Gridbox3Right = styled.div`
  overflow: hidden;
  height: 100%;
`;

export default function Promos() {
  return (
    <>
      <Center>
        {/* <Title title="Promo" /> */}
        <StyledProductsGrid>
          <GridBox1>
            <img src="/phone.webp" alt="" />
          </GridBox1>
          <GridBox2>
            <Gridbox2Title>
              Xiaomi <span>14 ultra</span>
            </Gridbox2Title>
            <p>Lens to legend</p>
            <Gridbox2TitleP>
              A great looking leather case and professional imageing platform
              all in one
            </Gridbox2TitleP>
          </GridBox2>
          <Gridbox3>

            <Gridbox3Left>
              <Gridbox3LeftTitle>Ultra-thin bezel design</Gridbox3LeftTitle>
              <Gridbox3LeftTitleSub>Stunning visuals</Gridbox3LeftTitleSub>
              <Gridbox3LeftSpan>Perfectly evolved. Using the most advanced FIAA screen wiring technology to integrate the panel via fanout routing within the display area allows the screen frame to be as narrow as 1.61mm for an unimpeded viewing experience.</Gridbox3LeftSpan>
            </Gridbox3Left>

            <Gridbox3Right>
              <img src="/cell.webp" alt="" />
            </Gridbox3Right>
          </Gridbox3>
        </StyledProductsGrid>
      </Center>
    </>
  );
}
