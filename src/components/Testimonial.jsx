import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            image:"images/avt1.png",
            name: "Patrice Evra",
            role: "Developer",
            comment: "Udetor is designed for all educators. You will be satisfied when using this theme, with many powerful features integrated that save hundreds of dollars. Learndash is an Udetor Customizer for creativity."
        },
        {
            image:"images/avt3.png",
            name: "Shakira",
            role: "Quality Assurance",
            comment: "Udetor is the future of online education. Coding unlocks creativity, develops problem-solving skills, and prepares students for future careers. Udetor is perfect for teaching real-world training."
        }
    ];

    return (
        <div className="text-center py-24">
            <h2 className="text-3xl font-bold mb-4">WHAT PEOPLE SAYS</h2>
            <p className="mb-8">Nice comments of students after studying our courses.</p>
            <div className="flex justify-center gap-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border rounded-lg p-5 shadow-lg max-w-md">
                        <div className="flex items-center mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="rounded-full mr-3" />
                            <div>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"{testimonial.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
