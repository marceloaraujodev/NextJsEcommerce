import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import NavMenuIcon from './icons/NavMenuIcon';

const StyleHeader = styled.header`
  background-color: #222;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 50;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.$mobileMenu ? 
    `display: block;` : 
    `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;  /* if used will cover the entire screen and show only nav */
  padding: 70px 20px 20px;

  background-color: #222;
  @media screen and (min-width: 768px){
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;

  @media screen and (min-width: 768px){
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 35px;
  height: 35px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 50;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <StyleHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>NextjsShop</Logo>
          <StyledNav $mobileMenu={mobileMenu}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>Products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileMenu(prev => !prev )}>
            <NavMenuIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyleHeader>
  );
}
