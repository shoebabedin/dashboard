import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventInfo from './EventInfo';
import EventTermsCondition from './EventTermsCondition';
import EventContent from './EventContent';
import EventConfig from './EventConfig';
import EventPreview from './EventPreview';

const CreateEvent = () => {
  const [selectedValue, setSelectedValue] = useState('1');
  const [step, setStep] = useState(1);


  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2>Create an Event</h2>
        </div>
        <div className="dash_content_main_center oflow-hd">
          <div className="row">
            <div className="col-md-5">
              <div className="form_left_col oflow-hd">
                <div className="form_left_col_des oflow-hd">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Accumsan nulla vitae et pulvinar viverra ornare vitae. Gravida aliquet iaculis
                  </p>
                </div>
                <div className="form_left_col_progress oflow-hd">
                  <ul>
                    <li className={step === 1 && step < 2 && "current"}>
                      <Link to="#">
                        <div>
                          <span>01</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p>Event Information</p>
                      </Link>
                    </li>
                    <li className={step === 2 && step < 3 && "current"}>
                      <Link to="#">
                        <div>
                          <span>02</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p>Event Configuration</p>
                      </Link>
                    </li>
                    <li className={step === 3 && step < 4 && "current"}>
                      <Link to="#">
                        <div>
                          <span>03</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p>Event Contents</p>
                      </Link>
                    </li>
                    <li className={step === 4 && step < 5 && "current"}>
                      <Link to="#">
                        <div>
                          <span>04</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p>Terms and Conditions</p>
                      </Link>
                    </li>
                    <li className={step === 5 && "current"}>
                      <Link to="#">
                        <div>
                          <span>05</span>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.82918 8.72843C3.73373 8.82445 3.60348 8.87802 3.4682 8.87802C3.33293 8.87802 3.20268 8.82445 3.10723 8.72843L0.224383 5.84511C-0.0747942 5.54593 -0.0747942 5.06079 0.224383 4.76218L0.585358 4.40111C0.88463 4.10194 1.3692 4.10194 1.66838 4.40111L3.46823 6.20103L8.33157 1.33754C8.63085 1.03836 9.1159 1.03836 9.41459 1.33754L9.77557 1.69861C10.0747 1.99779 10.0747 2.48284 9.77557 2.78154L3.82918 8.72843Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p>Preview and Submit for Review</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {step === 1 && <EventInfo selectedValue={selectedValue} handleDropdownChange={handleDropdownChange} />}
              {step === 2 && <EventConfig />}
              {step === 3 && <EventContent />}
              {step === 4 && <EventTermsCondition />}
              {step === 5 && <EventPreview />}
            </div>
          </div>
        </div>
        <div className="dash_content_main_bottom_process oflow-hd">
          {step < 5 ? (
            <Link to="#" type="button" onClick={() => setStep(step + 1)}>
              Proceed
            </Link>
          ) : (
            <Link to="#" type="submit">
              Submit for Review
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
