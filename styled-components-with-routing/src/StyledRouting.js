import React from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { injectGlobal, keyframes } from "styled-components";

// // const { injectGlobal, keyframes } = styled;
// const styled = styled.default;
// const { HashRouter, NavLink, Route} = ReactRouterDOM;

//global styles
injectGlobal`
   :root {
      --basic-font-size: calc(0.9rem + (1.7 - 0.9) * ((100vw - 18.75em) / (75 - 18.75)));
      --line-height: 1.4;
      --vertical-rhytm: calc(var(--basic-font-size)*var(--line-height));
    }
   html {
      font-size: var(--basic-font-size);
      font-family: 'Comfortaa', sans-serif, helvetica;
      font-kerning: normal;
      text-rendering: geometricPrecision;
    }
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }`;

//animations
const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
 }`;

const scale = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }`;

// styled components
const ColorWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(35deg, #396afc 55%, #396afc);
  animation: ${show} 1s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 5.61em;
  font-weight: 300;
  @media (max-width: 550px) {
    font-size: 2.986em;
  }
`;

const Header = styled.header`
  display: flex
  flex-wrap: wrap;
  animation: ${scale} 0.5s linear,
             ${show} 0.5s linear;
`;

const List = styled.ul`
  padding-left: 10px;
  list-style: none;
`;

// styled active Link
const activeClassName = "is-active";
const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  color: black;
  opacity: 0.65;
  text-decoration: none;
  font-weight: 300;
  transition: opacity 0.22s ease-out;
  &:hover {
    opacity: 1;
  }
  &.${activeClassName} {
    color: #D9144D; 
    opacity: 0.95;
  }`;

const LinkList = () => (
  <List>
    <li>
      <StyledLink exact to="/" activeClassName={activeClassName}>
        Saga
      </StyledLink>
    </li>

    <li>
      <StyledLink to="/Implementing" activeClassName={activeClassName}>
        Smart Data
      </StyledLink>
    </li>
    <li>
      <StyledLink to="/The" activeClassName={activeClassName}>
        For
      </StyledLink>
    </li>
    <li>
      <StyledLink to="/Future" activeClassName={activeClassName}>
        Smart People
      </StyledLink>
    </li>
  </List>
);

const Home = () => (
  <Header>
    <Title>Bracket Factory</Title>
    <LinkList />
  </Header>
);

// function for proper formatting of Rout's title string
const format = str => {
  const replacement = { "/": "", "-": " " };
  return str
    .replace(/\/|-/g, m => replacement[m])
    .replace(/\b./g, m => m.toUpperCase());
};

const Rout = ({ match }) => (
  <Header>
    <Title>{format(match.path)}</Title>
    <LinkList />
  </Header>
);

const SagaRouting = () => (
  <HashRouter>
    <ColorWrapper>
      <Route exact path="/" component={Home} />
      <Route path="/Implementing" component={Rout} />
      <Route path="/the" component={Rout} />
      <Route path="/Future" component={Rout} />
    </ColorWrapper>
  </HashRouter>
);

export default SagaRouting;
