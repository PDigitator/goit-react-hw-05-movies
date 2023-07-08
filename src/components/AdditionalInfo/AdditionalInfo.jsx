// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

import { TextTitle, List, StyledNavLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <>
      {/* <Header>
        <Container>
          <nav>
            <List>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </List>
          </nav>
        </Container>
      </Header> */}

      <div>
        <TextTitle>Additional information</TextTitle>
        <List>
          <li>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </li>
        </List>
      </div>
    </>
  );
};

export default AdditionalInfo;
