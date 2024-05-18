import Link from "next/link";
import styled from "styled-components";
import { StyleButton } from "./Button";

const StyledLink = styled(Link)`
  ${StyleButton}
`;

export default function ButtonLink(props) {
  return (
    <StyledLink {...props} />
  )
}
