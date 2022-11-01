import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCart = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
        <figure className="rounded-md">
          <img className="p-5 rounded-lg h-full" src={img} alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-rose-800 font-semibold">
              Price: ${price}
            </p>
            <p>
              <FaArrowRight className="text-xl ml-52 mr-0 text-rose-800 font-semibold" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
