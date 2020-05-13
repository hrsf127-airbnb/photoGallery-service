import React from 'react';
import Axios from 'axios';
import ImageGrid from './ImageGrid.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      hasLoaded: false,
      clickedGrid: false,
      clickedPhoto: null,
      captions: null,
    };
    this.getAll = this.getAll.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    Axios.get('/photoGallery')
      .then((response) => {
        const ImgCollection = [];
        ImgCollection.push(response.data[0]);
        this.setState({
          images: ImgCollection,
          hasLoaded: true,
          captions: ImgCollection[0].caption,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGridClick(event) {
    const { clickedGrid } = this.state;
    this.setState({ clickedGrid: !clickedGrid });
    this.setState({ clickedPhoto: event.target });
    event.preventDefault();
  }

  render() {
    const { images } = this.state;
    const { hasLoaded } = this.state;
    const { clickedGrid } = this.state;
    const { clickedPhoto } = this.state;
    const { captions } = this.state;

    if (hasLoaded) {
      if (!clickedGrid) {
        return (<ImageGrid images={images} onClick={this.handleGridClick} />);
      }
      return (
        <Carousel
          currentPhoto={clickedPhoto}
          images={images}
          handleClick={this.handleGridClick}
          captions={captions}
        />
      );
    }
    return (<div />);
  }
}

export default App;
