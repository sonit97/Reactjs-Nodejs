import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card text-left">
                  <img className="card-img-top" src="https://kenh14cdn.com/zoom/340_213/2019/photo1577149899283-1577149899391-crop-15771503026191963532810.jpg" alt="" />
                  <div className="card-body">
                    <h5 className="card-title float-left">{this.props.product_name}</h5>
                    <h4 className="card-title float-right">{this.props.product_price}</h4>
                  </div>
                </div>
              </div>
              {/* end col-4 */}
            </div>
          </div>
        );
    }
}

export default List;