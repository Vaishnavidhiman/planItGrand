import React, { useState, useRef, useEffect } from 'react';

function Cards({ item }) {
    const [showDescription, setShowDescription] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (descriptionRef.current && !descriptionRef.current.contains(event.target)) {
                setShowDescription(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <>
            <div className='mt-4 my-3 p-3 relative'>
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white " onClick={toggleDescription}>
                    <figure className="px-10 pt-10 relative">
                        <img src={item.image} alt="Event" className="rounded-xl h-64 w-full object-cover" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{item.name}</h2>
                        <div className="card-actions justify-between">
                            <div className="badge border-[2px] mt-2 text-orange-500">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 text-orange-500 rounded-full border-[2px] hover:bg-slate-800 duration-300">Connect</div>
                        </div>
                    </div>
                </div>
                {/* Description */}
                {showDescription && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="max-w-sm w-full p-4 bg-gray-700 text-gray-200 rounded-lg shadow-xl" ref={descriptionRef}>
                            <h2 className="text-xl flex justify-center text-orange-500 font-bold mb-2">{item.category}</h2>
                            <p>{item.description}</p>
                            <div className="flex justify-center mt-4"> {/* Centering the button */}
                                <button
                                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 duration-300"
                                    onClick={toggleDescription}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cards;