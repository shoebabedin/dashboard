import React from 'react';
import { Link } from 'react-router-dom';

const EventContent = () => {
  return (
    <>
      <div className="form_box_area_main event_information_form oflow-hd">
        <div className="form_title oflow-hd">
          <h2>Contents</h2>
        </div>
        <div className="form_wrapper oflow-hd">
          <div className="row">
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Event Thumbnail Image</label>
              </div>
              <div className="dash_main_main_table_form_up">
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
              </div>
              <div className="single_input_box_des oflow-hd">
                <p>The size should be 1000x500 PX</p>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="avatar">Banner Images</label>
              </div>
              <div className="dash_main_main_table_form_up">
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
              </div>
              <div className="single_input_box_des oflow-hd">
                <p>The size should be 1000x500 PX</p>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box">
                <label htmlFor="#">Event Summary</label>
                <div className="single_input_box_editor">
                  <textarea></textarea>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single_input_box econ_sponsor_table">
                <label htmlFor="#">Sponsors</label>
                <div className="dash_main_table_wrapper">
                  <div className="dash_main_main_table oflow-hd">
                    <table>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td>
                          <img src="images/simg.png" alt="img" />
                        </td>
                        <td>Rockstar</td>
                        <td>Title Sponsor</td>
                        <td>
                          <Link to="#">Edit</Link>
                          <Link className="remove" to="#">
                            Delete
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="dash_main_main_table_empty">No artist added yet</div>
                  <div className="dash_main_main_table_add oflow-hd">
                    <ul>
                      <li>
                        <Link className="addMoreArtist" to="#!">
                          Add Artist +
                        </Link>
                      </li>
                    </ul>
                    <div className="dash_main_main_table_form oflow-hd">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="single_input_box">
                            <input type="text" value="" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single_input_box">
                            <input type="text" value="" placeholder="Sponsor Type" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="dash_main_main_table_form_up">
                            <input type="file" id="avatar" name="cf_photo" accept="image/png, image/jpeg" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="dash_main_main_table_form_action">
                            <ul>
                              <li>
                                <Link to="#!">Cancel</Link>
                              </li>
                              <li>
                                <Link to="#!">Add</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventContent;
