import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from '../styles/mapStyles.js'

const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
  }

  return (
    <div className="font-poppins">
      <div className="grid md:grid-cols-2 gap-6">
        <form
          className="text-white px-2 py-8"
          action=""
          method="post"
          onSubmit={handleOnSubmit}
        >
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h1&gt;
          </p>
          <h1 className="text-[6rem] font-bold font-script ml-2">Contact Me</h1>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h1&gt;
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;p&gt;
          </p>
          <p className=" text-gray-300 font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/p&gt;
          </p>
          <p className="text-red-200 text-xl font-bold font-pencil ">
            &lt;form&gt;
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p>
              <label
                className="block text-4xl font-bold py-4 text-red-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className=" w-full flex-1 bg-white font-poppins font-black text-xl text-gray-900 p-2"
                type="text"
                name="name"
              />
            </p>
            <p>
              <label
                className="block text-4xl font-bold py-4 text-red-300"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="w-full flex-1 bg-white  font-poppins font-black text-xl text-gray-900 p-2"
                type="email"
                name="email"
              />
            </p>
          </div>

          <p>
            <label
              className="block text-4xl font-bold py-4 text-red-300"
              htmlFor="name"
            >
              Subject
            </label>
            <input
              className="w-full flex-1 bg-white  font-poppins font-black text-2xl text-gray-900 p-2"
              type="email"
              name="email"
            />
          </p>
          <p>
            <label
              className="block text-4xl font-bold py-4 text-red-300"
              htmlFor="name"
            >
              Message
            </label>
            <textarea
              className="mb-4 w-full flex-1 bg-white  font-poppins font-black text-2xl text-gray-900 p-2"
              name="message" rows="6"
            />
          </p>
          <p className="flex justify-end">
            <button className="border-black py-4 w-60 mt-8 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black  font-poppins">
              Submit
            </button>
          </p>
          <p className="text-red-200 text-xl font-bold font-pencil">
        &lt;/form&gt;
      </p>
        </form>

        <div className="text-3xl text-white w-full h-full py-20 px-6 opacity-30">
          <GoogleMapReact 
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
            defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }}
            center={{ lat: 10.99835602, lng: 77.01502627 }}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
