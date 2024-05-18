import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


export default function Layout({children}) {
  return (
    <Vertical>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Vertical>
  )
}
