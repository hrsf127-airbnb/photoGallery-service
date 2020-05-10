import React from 'react';
import $ from 'jquery';
import Photo from './photo.jsx';
import Description from './description.jsx';

export default class Gallery extends React.Component {
  constructor () {
    super();
    this.state = {
      images: []
    };
    this.hasImages = this.hasImages.bind(this);
  }

  //make a function that gets images, containing AJAX call
  //try using Fetch

  componentWillMount () {
    $.ajax({
      url: '/images',
      // contentType: 'application/json',
      // dataType: 'json',
      type: 'GET',
      success: (data) => {
        this.setState({
          images: data
        });
      },
      error: (err) => {
        console.log('Gallery.jsx failure... ', err);
      }
    });
  }

  hasImages (prop) {
    if (prop.length === 0) {
      return (<img src="img/no-photo.jpg" alt="Not available" className="main" />);
    } else if (prop.length === 1) {
      return (<img src={prop[0].url} alt="Main" className="main" />);
    } else {
      return (
        <div>
          <img src={prop[0].url} alt="Main" data-toggle="modal" data-target="#mod" className="main" />
          <p className="num-photos">There are <strong>{prop.length}</strong> photos in this gallery.</p>

          <div className="modal fade" id="mod" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">

                  <div className="selected">
                    {prop.map((image, index) => {
                      return (<div key={image.id}>
                        <p>Image <strong>{index + 1}</strong> out of {prop.length}</p>
                        <Photo image={image} />
                        <Description description={image} />
                      </div>
                      );
                    })
                    }
                  </div>

                  <div className="slider-nav">
                    {prop.map((image, index) => {
                      return (<div key={image.id}><Photo image={image} /></div>);
                    })
                    }
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.hasImages(this.state.images)}
      </div>
    );
  }
}

