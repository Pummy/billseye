import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


export class ChartJs extends Component {
      
    render() {
        return (
          <div>
        
          <div className="row">
            
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  {/* <h4 className="card-title">Striped Table</h4>
                  <p className="card-description"> Add className <code>.table-striped</code>
                  </p> */}
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> Callers </th>
                          <th> Call Status </th>
                          <th> Time & Date </th>
                          <th> Duration </th>
                          <th> Bill Status </th>
                          <th> Fee </th>
                          <th> Rate </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> Herman Beck </td>
                          <td>
                            <ProgressBar variant="success" now={25} />
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face2.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> Messsy Adam </td>
                          <td>
                            <ProgressBar variant="danger" now={75} />
                          </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face3.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> John Richards </td>
                          <td>
                            <ProgressBar variant="warning" now={90} />
                          </td>
                          <td> $138.00 </td>
                          <td> Apr 12, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face4.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> Peter Meggik </td>
                          <td>
                            <ProgressBar variant="primary" now={50} />
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face5.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> Edward </td>
                          <td>
                            <ProgressBar variant="danger" now={60} />
                          </td>
                          <td> $ 160.25 </td>
                          <td> May 03, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face6.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> John Doe </td>
                          <td>
                            <ProgressBar variant="info" now={65} />
                          </td>
                          <td> $ 123.21 </td>
                          <td> April 05, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                        <tr>
                          <td className="py-1 flexaddrow">
                            <img src={require("../../assets/images/faces/face7.jpg")} alt="user icon" />
                            <span className="ml-3 flexaddcolum">
                              <span className="profile-name">Sabrina Yerin </span>
                              <small className="designation text-muted text-small">1234567890</small>
                            </span>
                          </td>
                          <td> Henry Tom </td>
                          <td>
                            <ProgressBar variant="warning" now={20} />
                          </td>
                          <td> $ 150.00 </td>
                          <td> June 16, 2015 </td>
                          <td>fee</td>
                          <td>rate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        )
    }
}

export default ChartJs