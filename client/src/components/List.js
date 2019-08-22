import React from 'react';
import axios from 'axios';
import ListData from './ListData';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/ecommerce')
      .then(res => {
        this.setState({
          data: [...res.data]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.data.map((products, index) => {
            return <ListData products={products} key={index} />;
          })}
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
