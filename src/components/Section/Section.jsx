import PropTypes from 'prop-types';

import {
  SectionWrapper,
  Container,
  Title,
} from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
