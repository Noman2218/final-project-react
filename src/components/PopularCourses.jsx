import React from 'react'

const PopularCourses = () => {
    const cards = [
        {
            image: "/images/popularcourse01.jpg",
            title: "WordPress for Education",
            rating: "★★★★☆ (4 votes)",
            price: "$45",
            discount: "$68",
        },
        {
            image: "images/popularcourse02.jpg",
            title: "The Ultimate Drawing Course",
            description: "Michelle Golden / Mar 14, 2018",
            price: "Free",
            discount: "",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/popularcourse03.jpg",
            title: "The Complete Digital Marketing Course",
            description: "Ms. Lucius / Dec 18, 2018",
            price: "$55",
            discount: "$78",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/popularcourse04.jpg",
            title: "The Unreal Engine Developer Course",
            description: "Mr. John Wick / Oct 17, 2018",
            price: "Free",
            discount: "",
            rating: "★★★★☆ (4 votes)"
        },
    ];

    return (
        <div>
            <h1 className='mt-10 pt-10 text-4xl md:text-5xl font-bold mb-4 uppercase text-center'>POPULAR COURSES</h1>
            <p className='text-center'>We have monthly 1000+ request to be joined course.</p>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 my-10">
                    {cards.map((card, index) => (
                        <div key={index} className="shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                            {/* Image with aspect ratio */}
                            <div className="w-full aspect-w-16 aspect-h-9">
                                <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-500 text-lg font-bold">{card.price}</span>
                                    {card.discount && <span className="text-gray-400 line-through">{card.discount}</span>}
                                </div>
                                <div className="text-yellow-500 text-sm">{card.rating}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;
