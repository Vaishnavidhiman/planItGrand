import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import Cards from "./Cards";

function FreeEvents() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        const getEvent = async () => {
            try {
                const res = await axios.get("http://localhost:4001/event");
                const data = res.data.filter((data) => data.price === 0) 
                setEvent(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getEvent();
    }, []);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:min-w-screen">
                <div>
                    <h1 className="text-xl pb-2 text-orange-500">Free expert advices</h1>
                    <p>
                        Enjoy the convenience of complimentary event planning for your
                        smaller gatherings! Let our expert team handle the details, ensuring
                        your intimate events are seamless and stress-free, all at no cost to
                        you.
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {event.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default FreeEvents;
