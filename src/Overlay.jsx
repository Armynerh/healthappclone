import React from 'react';
import styled from '@emotion/styled';

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgba(71, 185, 248, 1.0), rgba(71, 185, 248, 0.5)),
              url(src/assets/richard-catabay-05kHY7AYCp8-unsplash.jpeg) no-repeat center center fixed;
  background-size: cover;
  overflow: auto;
`;

const Overlay = ({ children }) => {
  return (
    <StyledOverlay>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
