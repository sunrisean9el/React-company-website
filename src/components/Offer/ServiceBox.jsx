import React from "react";
import services from "../../data/Services";

const ServiceBox = () => {
  return services.map((item) => {
    if (item.isNew === true) {
      return (
        <div className="service-box">
          <h3 className="service-name">
            {item.name} {item.id}
          </h3>
          <p className="service-info">(nowość)</p>
        </div>
      );
    } else {
      return (
        <div className="service-box">
          <h3 className="service-name">
            {item.name} {item.id}
          </h3>
        </div>
      );
    }
  });
};

export default ServiceBox;
