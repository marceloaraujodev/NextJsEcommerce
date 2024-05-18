import styled, {css} from "styled-components"
import { primary } from "@/lib/colors";
// import css from "styled-jsx/css";

export const StyleButton = css`
  border: 0;
  border-radius: 3px;
  color: black;
  padding: 10px 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  svg{
    height: 18px;
    margin-left: 8px;
  }
  ${props => props.$block && css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
  ${props => props.$white && !props.$outline && css`
    background-color: white;
    color: black;
  ` }
  ${props => props.$white && props.$outline && css`
    background-color: transparent;
    color: white;
    border: 1px solid white;
  ` }
  ${props => props.$black && !props.$outline && css`
    background-color: black;
    color: white;
  ` }
  ${props => props.$black && props.$outline && css`
    background-color: transparent;
    color: black;
    border: 1px solid black;
  ` }
  ${props => props.$primary && !props.$outline && css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color: white;
  `}
  ${props => props.$primary && props.outline && css`
    background-color: transparent;
    border: 1px solid ${primary};
    color: ${primary};
  `}
  ${props => props.size === 'l' && css`
   font-size: 1.2rem;
   padding: 10px 20px;
   svg{
    height: 20px;
   }
  `}
  ${props => props.size === 's' && css`
   font-size: 0.9rem;
   padding: 5px 10px;
   svg{
    height: 20px;
   }
   `}
`;

const StyledBtn = styled.button`
   ${StyleButton}
`;

export default function Button({children, ...all}) {
  return (
    <StyledBtn {...all}>{children}</StyledBtn>
  )
}
