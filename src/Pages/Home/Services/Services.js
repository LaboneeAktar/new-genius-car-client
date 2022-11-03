import React from "react";
import { useState, useEffect } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-rose-800">Services</p>
        <h1 className="mt-2 text-4xl">Our Services Area</h1>
        <p className="py-4">
          The majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};
export default Services;
