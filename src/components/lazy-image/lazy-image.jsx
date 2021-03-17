import React from "react";
import LazyLoad from "react-lazyload";
import {
  ImageWrapperContainer,
  StyledImageContainer,
  PlaceholderContainer,
} from "./lazy-image.styled";

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapperContainer>
      <PlaceholderContainer ref={refPlaceholder} />
      <LazyLoad>
        <StyledImageContainer
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapperContainer>
  );
};

export default LazyImage;
