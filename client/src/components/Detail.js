import React from 'react';
import { mdReact } from 'markdown-react-js';

class Detail extends React.Component {
  render() {
    const desc = mdReact()(`This is an **iPhone XS Max**
with *256GB Memory* and *4GB RAM* you will get a new experience.
No worries about speed anymore, you will get the best experience
you never had before.

* 6.5" display Super Retina
* Apple A12 Bionic
* iOS 12`);
    return (
      <div>
        <div className="row">
          <div className="col-sm" style={{ height: '300px' }}>
            <img
              src={
                'https://www.costco.co.uk/medias/sys_master/images/hd8/h4f/11515701362718.jpg'
              }
              alt=""
              style={{
                maxHeight: '250px',
                maxWidth: '400px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>
          <div className="col-sm">
            <h2>iPhone XS Max</h2>
            <span className="badge badge-info" style={{ height: '22px' }}>
              Apple
            </span>
            <hr />
            <span
              className="badge badge-pill badge-success"
              style={{ height: '22px' }}
            >
              price
            </span>
            <h3>Rp 19.999.999,-</h3>
            <hr />
            <button type="button" className="btn btn-success">
              <i className="fas fa-shopping-cart mx-sm-2" />
              Buy
            </button>
          </div>
        </div>
        <div className="row ml-3">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <button class="nav-link active">Product Detail</button>
            </li>
            <li class="nav-item">
              <p class="nav-link">Testimonial</p>
            </li>
          </ul>
        </div>
        <div className="row ml-3 mt-3">
          <div className="col-sm">{desc}</div>
        </div>
      </div>
    );
  }
}

export default Detail;
