import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThumbnailSlider from './ThumbnailSlider.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262626;
  }
`;

const Button = styled.button`
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  background-color: inherit;
  border: none;
  font-size: 100%;
  &:focus {outline:0;};
`;
const CloseButtonDiv = styled.div`
  line-height: 1.43;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  
  background-color: inherit;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 32px;
  height: 32px;
  padding: 16px 28px 8px !important;
  `;

const CloseSvg = styled.svg`
  cursor: pointer;
  height: 2em;
  width: 2em;
  display: block;
  fill: rgb(255, 255, 255);
  font-weight: 300;
  font-size: 90%;
  fill: rgb(255, 255, 255);
`;

const HeaderDiv = styled.div`
  padding: 66px 15px 20px !important;
`;

const ArrowAndImageContainer = styled.div`
  display: table-row !important;
  height: 100% !important;
`;

const TableRow = styled.div`
  display: table-row !important;
`;

const LeftArrowButton = styled.button`
  
  position: absolute !important;
  top: 0px !important;
  height: 100% !important;
  z-index: 3 !important;
  font-size: medium !important;
  width: 40px !important;
  left: 0px !important;
  background: none !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  &:focus {outline:0;};
  padding: 1px 7px 2px;
`;

const RightArrowButton = styled.button`
  
  position: absolute !important;
  top: 60px !important;
  height: 80% !important;
  z-index: 3 !important;
  font-size: medium !important;
  right: 0px !important;
  background: none !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  &:focus {outline:0;};
  padding: 1px 7px 2px;
`;

const PreviousSvg = styled.svg`
  cursor: pointer !important;
  height: 4.8em;
  width: 4.8em;
  fill: rgb(255, 255, 255);
`;

const NextSvg = styled.svg`
  cursor: pointer !important;
  height: 4.8em;
  width: 4.8em;
  fill: rgb(255, 255, 255);
`;
const Frame = styled.div`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-direction: column;
`;

const CurrentPhotoFrame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CurrentPhoto = styled.img`
  max-width: 100%;
  height: 470px;
  object-fit: cover;
  background-position: 50% 50%;
  background-size: cover;
`;

const CarouselContainer = styled.div`
  display: flex;
  z-index: 2;
`;

const CaptionDiv = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 200;
  position: absolute;
  z-index: 2;
  bottom: 15%;
  left: 25%;
  color: white;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.currentPhoto.currentSrc,
      images: this.props.images[0].imageUrl,
      // TODO: on first iteration, have to transform slider little bit differently
      // keep track if first iteration
      transform: 0,
      // TODO: load captions below main picture
      captions: this.props.captions,
    };
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleRightArrowClick(event) {
    const { images, currentImage, transform } = this.state;
    const nextImagePosition = images.indexOf({ currentImage }.currentImage) + 1;
    const nextImage = images[nextImagePosition];
    let transformed;
    if (nextImage !== undefined) {
      transformed = transform - 110;
      this.setState({ currentImage: nextImage, transform: transformed });
    } else {
      transformed = 280;
      this.setState({ currentImage: images[0], transform: transformed });
    }
    event.preventDefault();
  }

  handleLeftArrowClick(event) {
    const { images, currentImage, transform } = this.state;
    const previousImagePosition = { images }.images.indexOf({ currentImage }.currentImage) - 1;
    const previousImage = { images }.images[previousImagePosition];
    const imagesListLength = { images }.images.length;
    let transformed;
    if (previousImage !== undefined) {
      transformed = transform + 110;
      this.setState({ currentImage: previousImage, transform: transformed });
    } else {
      transformed = (images.length * -110) + 380;
      this.setState({
        currentImage: { images }.images[imagesListLength - 1],
        transform: transformed,
      });
    }
    event.preventDefault();
  }

  render() {
    const { handleClick, captions } = this.props;
    const { currentImage } = this.state;
    const { images } = this.state;
    const { transform } = this.state;
    const currentImagePosition = images.indexOf(currentImage) + 1;
    const imagesLength = images.length;
    return (
      <CarouselContainer>
        <GlobalStyle />
        <CloseButtonDiv>
          <Button>
            <CloseSvg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" onClick={handleClick}>
              <path d="m23.25 24c-.19   0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
            </CloseSvg>
          </Button>
        </CloseButtonDiv>
        <Frame>
          <TableRow>
            <HeaderDiv />
          </TableRow>
          <TableRow>
            <ArrowAndImageContainer>
              <LeftArrowButton aria-label="Previous">
                <PreviousSvg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" onClick={this.handleLeftArrowClick}>
                  <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
                </PreviousSvg>
              </LeftArrowButton>
              <RightArrowButton>
                <NextSvg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" onClick={this.handleRightArrowClick}>
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                </NextSvg>
              </RightArrowButton>
            </ArrowAndImageContainer>
            <CurrentPhotoFrame>
              <CurrentPhoto src={currentImage} alt="currentPhoto" />
            </CurrentPhotoFrame>
          </TableRow>
          <CaptionDiv>
            {`${currentImagePosition}/${imagesLength}: ${captions[Math.floor(Math.random() * captions.length)]}`}
          </CaptionDiv>
          <ThumbnailSlider images={images} currentPhoto={currentImage} transform={transform} />
        </Frame>
      </CarouselContainer>
    );
  }
}
export default Carousel;
