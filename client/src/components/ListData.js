import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListData extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card" style={{ width: '300px' }}>
          <div className="card-header">
            <img
              src={`http://localhost:4000/image/${products.image}`}
              alt=""
              style={{
                height: '200px',
                maxWidth: '300px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{products.title}</h5>
            <span
              className={products.rate >= 1 ? 'fas fa-star' : 'far fa-star'}
            />
            <span
              className={products.rate >= 2 ? 'fas fa-star' : 'far fa-star'}
            />
            <span
              className={products.rate >= 3 ? 'fas fa-star' : 'far fa-star'}
            />
            <span
              className={products.rate >= 4 ? 'fas fa-star' : 'far fa-star'}
            />
            <span
              className={products.rate >= 5 ? 'fas fa-star' : 'far fa-star'}
            />
            <p className="card-text">{products.description}</p>
            <h4>Rp {products.price}</h4>
            <Link className="btn btn-info">
              DETAIL ITEM
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListData;
