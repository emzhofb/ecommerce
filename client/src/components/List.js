import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card" style={{ width: '300px' }}>
              <div className="card-header">
                <img
                  src={
                    'https://www.costco.co.uk/medias/sys_master/images/hd8/h4f/11515701362718.jpg'
                  }
                  alt=""
                  style={{
                    maxHeight: '200px',
                    maxWidth: '300px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">iPhone XS Max</h5>
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="far fa-star" />
                <p class="card-text">
                  iPhone XS Max with 256GB of storage and 4GB RAM
                </p>
                <h4>Rp 19.999.999,-</h4>
                <Link to="/detail" class="btn btn-info">
                  DETAIL ITEM
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: '300px' }}>
              <div className="card-header">
                <img
                  src={
                    'https://www.costco.co.uk/medias/sys_master/images/hd8/h4f/11515701362718.jpg'
                  }
                  alt=""
                  style={{
                    maxHeight: '200px',
                    maxWidth: '300px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">iPhone XS Max</h5>
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="far fa-star" />
                <p class="card-text">
                  iPhone XS Max with 256GB of storage and 4GB RAM
                </p>
                <h4>Rp 19.999.999,-</h4>
                <Link to="/detail" class="btn btn-info">
                  DETAIL ITEM
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: '300px' }}>
              <div className="card-header">
                <img
                  src={
                    'https://www.costco.co.uk/medias/sys_master/images/hd8/h4f/11515701362718.jpg'
                  }
                  alt=""
                  style={{
                    maxHeight: '200px',
                    maxWidth: '300px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">iPhone XS Max</h5>
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="far fa-star" />
                <p class="card-text">
                  iPhone XS Max with 256GB of storage and 4GB RAM
                </p>
                <h4>Rp 19.999.999,-</h4>
                <Link to="/detail" class="btn btn-info">
                  DETAIL ITEM
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" style={{ width: '300px' }}>
              <div className="card-header">
                <img
                  src={
                    'https://www.costco.co.uk/medias/sys_master/images/hd8/h4f/11515701362718.jpg'
                  }
                  alt=""
                  style={{
                    maxHeight: '200px',
                    maxWidth: '300px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">iPhone XS Max</h5>
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="fas fa-star" />
                <span className="far fa-star" />
                <p class="card-text">
                  iPhone XS Max with 256GB of storage and 4GB RAM
                </p>
                <h4>Rp 19.999.999,-</h4>
                <Link to="/detail" class="btn btn-info">
                  DETAIL ITEM
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default List;
