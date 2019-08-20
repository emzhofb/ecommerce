import React from 'react';
import { Link } from 'react-router-dom';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img src={imagePreviewUrl} style={{ width: '20rem' }} alt="" />
      );
    }

    return (
      <div className="card border-info mb-3">
        <div className="card-header text-white bg-info">Add Ads</div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Title</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Rate</div>
              </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" placeholder="0" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Description</div>
              </label>
              <div className="col-sm-10">
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  placeholder="description"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Price</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="price"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Brand</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="brand"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Description</div>
              </label>
              <div className="col-sm-10">
                <textarea
                  rows="5"
                  type="text"
                  className="form-control"
                  placeholder="description"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right">Image</div>
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="form-control"
                  onChange={this.handleImageChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right" />
              </label>
              <div className="col-sm-10">{$imagePreview}</div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <div className=" float-xl-right" />
              </label>
              <div className="col-sm-10">
                <Link to="/">
                  <button type="submit" className="btn btn-success text-white">
                    Save
                  </button>
                </Link>
                <Link to="/" className="btn btn-warning mx-sm-1 text-white">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
