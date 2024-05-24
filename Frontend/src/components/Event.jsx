import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Event() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get("http://localhost:4001/event");
        console.log(res.data);
        setEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl md:min-w-screen container mx-auto md:px-20 px-4">
        <div className="pt-24 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-orange-500">Here! :) </span>
          </h1>
          <p className="mt-12">
            Step into a world of effortless event planning, where every detail
            is expertly managed by our dedicated team. From grand celebrations
            to intimate affairs, we're here to turn your dreams into reality.
            Let us take the stress out of planning so you can enjoy every moment
            of your special occasion.
          </p>
          <Link to="/">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {event.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Event;
