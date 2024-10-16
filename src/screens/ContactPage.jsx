import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const ContactPage = () => {
    const [result, setResult] = useState("");
    const [open, setOpen] = useState(false);  // State for controlling modal visibility
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = (message) => {
        setResult(message);
        setOpen(true);  // Open modal when called
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);  // Close modal after 2 seconds
            setConfirmLoading(false);
        }, 200);
    };

    const handleCancel = () => {
        setOpen(false);  // Close modal when cancelled
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0898a4ca-dc8c-46af-8018-c3f4a3b18248");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showModal("Your message has been sent.");  // Show modal on successful submission
                event.target.reset();
            } else {
                showModal("Something went wrong: " + data.message);  // Show modal with error message
            }
        } catch (error) {
            showModal("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <header className="top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] ">
                <Logo />
                <Navbar />
            </header>

            {/* Hero section */}
            <div className="grid-cols-1 relative bg-cover bg-center h-[30vh]">
                <img
                    src="/images/become-teacher-title.jpg"
                    alt="sliderbanner"
                    className="absolute w-full h-full object-cover"
                />
                <div className="relative max-w-7xl mx-auto p-4 sm:px-8 lg: py-12">
                    <div className="items-start text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Contact Us</h1>
                        <ul className="flex flex-wrap">
                            <li className="mr-4 list-none"><Link to="/">Home</Link></li>
                            <li className="mr-4 list-none"><Link to="/Courses">Courses</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold">COME TO</h2>
                        <p>99 Barnard St - Suite 111</p>
                        <p>United Kingdom</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold">CALL TO</h2>
                        <p>Local: 1-800-123-hello</p>
                        <p>Mobile: 1-800-123-hello</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold">CONNECT TO</h2>
                        <p>info@edue.com</p>
                        <p>www.edue.com</p>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-lg font-bold">Contact Form</h2>
                    <form className="bg-white p-6 rounded-lg shadow mt-4" onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-1">How can we help?*</label>
                            <textarea
                                id="message"
                                name="message"
                                className="border rounded w-full p-2"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </form>
                </div>

                {/* Modal for form submission result */}
                <Modal
                    title="Message Status"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>{result}</p>
                </Modal>

                {/* Map Section */}
                <div className="my-8">
                    <h2 className="text-lg font-bold">Our Location</h2>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.800149964352!2d-122.47695148458882!3d37.80241667975565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580ec3f845c5d%3A0xd88a3d962c184c47!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129%2C%20USA!5e0!3m2!1sen!2sin!4v1697161958748!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
