import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

export const ImageWrapperContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PlaceholderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 5px;
  animation: ${LoadingAnimation} 1s infinite;
`;

export const StyledImageContainer = styled.img`
  object-fit: contain;
  height: 250px;
  transition: transform 450ms;
  margin-right: 10px;
  max-height: 250px;

  &:hover {
    transform: scale(1.09);
  }
`;
