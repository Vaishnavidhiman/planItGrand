import React from 'react'
import banner from "../../public/event.jpg"

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-semibold'>
                        Hey there! What kind of epic event are you dreaming of?<br/><span className=' text-orange-500'>Let's chat!</span>
                        </h1>
                        <p className='text-xl'>
                        Mark your special occasions with us. From birthdays to weddings, our team designs unforgettable events, tailored precisely to your preferences and dreams.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 dark:border-slate-500 dark:bg-slate-900 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn bg-black text-white border-slate-500 hover:bg-slate-700 btn-active mt-6">Submit</button>
                </div>
                <div className='w-full mt-20 order-1 md:w-1/2 border-none'>
                    <img src={banner} className='p-10 max-sm:p-0' alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;