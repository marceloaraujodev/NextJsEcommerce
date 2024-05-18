import Center from '@/components/Center'
import Layout from '@/components/Layout'
import styled from 'styled-components'

const CategoriesContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
`;

const ItemBox = styled.a`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  cursor: pointer;
  /* border: 3px solid rgba(0, 0, 0, 0.3); */

  position: relative;
  img{
    width: 250px;
    height: 250px;
    object-fit: cover;
    position: absolute;
    opacity: .20;
  }
`;

export default function Categories() {
  return (
    <>
    <Layout>
    <Center>
      <div>categories</div>
      <CategoriesContainer>
        <ItemBox>WATCHES
        <img src='/watches.png' alt='' />
        </ItemBox>
        <ItemBox>LAPTOPS
        <img src='/lap.jpg' alt='' />
        </ItemBox>
        <ItemBox>CELLPHONES
        <img src='/cell.webp' alt='' />
        </ItemBox>
      </CategoriesContainer>

    </Center>
    </Layout>
    </>
  )
}
