import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { mediaQueries } from "../../media_query_style";

// const BG = require('../../images/bg.png');

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Navs = styled.div`

  margin: 50px auto;

  ${mediaQueries('md')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
  ${mediaQueries('lg')`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
  ${mediaQueries('xl')`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
const Nav = styled.div`

`;
const NavImage = styled.img`
  ${mediaQueries('md')`
    width: 50px;
  `}
  ${mediaQueries('lg')`
    width: auto;
  `}
`;

export default function Layout({children, title = 'This is the default title'}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navs>
        <NavImage src={'./images/nav_line.svg'} />
        <Nav>ABOUT</Nav>
        <img src="./images/nav_dot.svg" />
        <Nav>WRITINGS</Nav>
        <img src="./images/nav_dot.svg" />
        <Nav>USES</Nav>
        <img src="./images/nav_dot.svg" />
        <Nav>CONTACT</Nav>
        <NavImage src={'./images/nav_line.svg'} />
      </Navs>

      {children}
    </div>
  )
}
