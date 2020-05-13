import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 15.5vw);
  grid-gap: 0;
  width: 100%;
  background-color: #484848;

  &:hover div {
    opacity: 0.5;
  }
`;

const MainImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  
  border: solid 1px #484848;
  overflow: hidden;

  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  
  &:hover {
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transform: scale(1.05);
    opacity: 1;
  }
`;

const GridImage2 = styled.div`
  grid-column_start: 3,
  grid-column-end: 4,
  grid-row-start: 1;
  grid-row-end: 2;

  border: solid 1px #484848;
  overflow: hidden;

  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

const GridImage3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  border: solid 1px #484848;
  overflow: hidden;

  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

const GridImage4 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;

  border: solid 1px #484848;
  overflow: hidden;

  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;
const GridImage5 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;

  border: solid 1px #484848;
  overflow: hidden;

  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

const ImageGrid = (props) => {
  // const randomListing = Math.floor(Math.random() * 100);
  return (
    <Grid onClick={props.onClick}>
      <GlobalStyle />
      <MainImage>
        <Img src={props.images[0].imageUrl[0]} />
      </MainImage>
      <GridImage2>
        <Img src={props.images[0].imageUrl[1]} />
      </GridImage2>
      <GridImage3>
        <Img src={props.images[0].imageUrl[2]} />
      </GridImage3>
      <GridImage4>
        <Img src={props.images[0].imageUrl[3]} />
      </GridImage4>
      <GridImage5>
        <Img src={props.images[0].imageUrl[4]} />
      </GridImage5>
    </Grid>
  );
};

export default ImageGrid;
