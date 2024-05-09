import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Usługi</h2>
          <p>
            Zapraszamy do zapoznania się z usługami, które oferujemy!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 image_block_icons">
                  {" "}
                  <span className='image_icons'><img src={d.icon} alt={'icon'} /></span>
                  <div className="service-desc">
                  <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
