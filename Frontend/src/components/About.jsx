import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="max-w-screen-2xl md:min-w-screen container mx-auto md:px-20 px-4">
            <div className="pt-24 items-center justify-center text-center ">
                <h1 className="text-2xl md:text-4xl">
                    <span className="text-orange-500">Plan It Grand:</span>Your Partner
                    for Success in Every Event
                </h1>
                <p className="mt-12">
                    Plan It Grand stands apart as more than just event planners; we're
                    orchestrators of unforgettable memories. Our team, composed of
                    passionate and detail-driven event management students, is committed
                    to realizing your dream event in a way that goes beyond expectations.
                    Guided by innovation and fueled by collaboration, we hold the belief
                    that every milestone, from graduations to festivals, deserves a touch
                    of grandeur. With our meticulous approach, we ensure a seamless
                    planning journey, allowing you to savor every moment of your special
                    occasion.
                </p>

                <h2 className="text-2xl md:text-4xl text-center text-orange-500 mt-10 mb-5">Why Choose Us?</h2>
                <ul className="text-left pl-4">
                    <li><span className="text-orange-500">Visionary Planning</span>: We specialize in transforming your innovative ideas into meticulously planned and flawlessly executed events, ensuring they surpass your expectations and leave a lasting impression on your guests.</li>
                    <li><span className="text-orange-500">Hassle-Free Experience</span>: Enjoy a stress-free event planning journey with us as we take care of all the intricate details and logistics, allowing you to focus on what truly matters - enjoying the occasion.</li>
                    <li><span className="text-orange-500">Expertise and Innovation</span>: Our team stays abreast of the latest industry trends and innovations, infusing your events with creativity and cutting-edge solutions that set them apart from the rest.</li>
                    <li><span className="text-orange-500">Trusted Partnerships</span>: Benefit from our extensive network of trusted vendors and partners, guaranteeing top-tier services at competitive rates, and ensuring every aspect of your event is handled with professionalism and reliability.</li>
                    <li><span className="text-orange-500">Memorable Events</span>:  With meticulous attention to detail and a commitment to excellence, we craft memorable experiences that captivate your guests and create cherished memories that last a lifetime.</li>
                    <li><span className="text-orange-500">Tailored Solutions</span>: We understand that every event is unique, which is why we offer customized solutions tailored to your specific needs, preferences, and budget, ensuring your event reflects your vision and exceeds your expectations.</li>
                </ul>
                <h2 className="text-2xl md:text-4xl text-center text-orange-500 mt-10 mb-5">Feeling inspired to bring your dream event to life?</h2>
                <p>
                Contact us now for a complimentary consultation. Let's create something extraordinary together.
                </p>
                <Link to="/">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300 mt-6 mb-4">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default About;
