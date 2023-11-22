import React, { useState } from 'react';
import { useLocation } from 'react-router';

const TicketReg = () => {
  const slug = useLocation();
  const pathname = slug.pathname.split('/')[2];
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleProceed = (event) => {
    event.preventDefault();
    if (pathname === 'tickets') {
      const redirectUrl = '/ticketing';
      window.location.href = redirectUrl;
    }
    if (pathname === 'promotion-discount') {
      const redirectUrl = '/promotions-discount';
      window.location.href = redirectUrl;
    }
    if (pathname === 'priviliege-tickets') {
      const redirectUrl = '/single-events-priviliege';
      window.location.href = redirectUrl;
    }
    // Construct the URL based on the selected value

    // Redirect to the new URL
  };

  console.log(pathname);
  return (
    <>
      <div className="dash_content_main oflow-hd">
        <div className="dash_content_main_head oflow-hd">
          <h2>Manage Events</h2>
        </div>
        <div className="dash_content_main_center">
          <div className="dash_content_main_center_with_padding">
            <div className="select_event_wrapper oflow-hd">
              <div className="row">
                <form className="col-12">
                  <div className="single_input_box">
                    <label htmlFor="#">Select Event</label>
                    <select name="" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                      <option value="">Dameer & Fuad Presents SANJOY</option>
                    </select>
                  </div>
                  <div className="single_input_box_proceed">
                    <input type="submit" value="Proceed" onClick={handleProceed} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketReg;
