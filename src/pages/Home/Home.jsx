import React from 'react';
import { Helmet } from 'react-helmet-async';

import { HeaderSpan, MainText, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <MainText>
        <span>Welcome to Car Share App</span>
        <HeaderSpan>
          We can offer a car for any taste ! <br /> You can choose and rent your
          car following this {''}
          <StyledLink to={'/catalog'}>link</StyledLink> !
        </HeaderSpan>
      </MainText>
    </>
  );
};

export default Home;
