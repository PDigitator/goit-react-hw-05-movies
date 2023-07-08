import { HiArrowLeft } from 'react-icons/hi';
// import { Link } from 'react-router-dom'; //!

import { StyledLink } from 'components/BackLink/BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
