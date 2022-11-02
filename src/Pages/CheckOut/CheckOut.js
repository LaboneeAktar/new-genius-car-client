import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  //   console.log(service);
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    // console.log(name, phone, message);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // if(phone>11){
    //     alert('Phone number must be 11 character')
    // }
    // else{

    // }

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your Order Placed Successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h1 className="text-3xl text-center py-5">
          You are about to order: {title}
        </h1>
        <h2 className="text-2xl text-center">Price: {price}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-error w-full"
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-error w-full"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="input input-bordered input-error w-full"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-error w-full"
            required
          />
        </div>
        <div className="px-20">
          <textarea
            name="message"
            className="textarea textarea-error h-28 w-full"
            placeholder="Type Your Message Here"
          ></textarea>
          <span className="lg:ml-96">
            <button className="btn btn-error font-normal mb-5">
              Place Your Order
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
