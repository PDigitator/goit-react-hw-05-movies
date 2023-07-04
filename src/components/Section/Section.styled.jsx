import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 20px 0;
`;

const Container = styled.div`
  max-width: 1440px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  /* position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px; */
`;

export { SectionWrapper, Container, Title };
