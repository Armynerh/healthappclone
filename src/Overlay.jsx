import styled from '@emotion/styled';

  const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(src/assets/richard-catabay-05kHY7AYCp8-unsplash.jpeg) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto`;

    const BlueBackground = styled.div`
      background-color: rgb(67, 175, 255, 0.7); /* Blue background with transparency */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  `;
    

const Overlay = ({ children }) => {  return (
    <StyledOverlay>
      <BlueBackground>
          {children}
      </BlueBackground>
    </StyledOverlay>
  )
  };

export default Overlay;
