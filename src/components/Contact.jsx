import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    return (
        <section
            id="contacts"
            className="py-12 bg-background-light dark:bg-background-dark"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-primary dark:text-text-light mb-8 text-center">
                    Contact Us
                </h2>
                <p className="text-lg text-secondary dark:text-secondary mb-12 text-center">
                    We'd love to hear from you! Fill out the form below or reach
                    out via social media.
                </p>

                {/* Form */}
                <div className="flex flex-col lg:flex-row lg:space-x-12 justify-center items-center">
                    {/* Contact Form */}
                    <form
                        action="#"
                        method="post"
                        className="w-full lg:w-1/2 bg-white dark:bg-secondary p-8 rounded-lg shadow-lg"
                    >
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-primary dark:text-text-light mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-secondary dark:border-accent-dark rounded-lg bg-background-light dark:bg-background-dark text-primary dark:text-text-light"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-primary dark:text-text-light mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 border border-secondary dark:border-accent-dark rounded-lg bg-background-light dark:bg-background-dark text-primary dark:text-text-light"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-primary dark:text-text-light mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                required
                                rows="4"
                                className="w-full p-3 border border-secondary dark:border-accent-dark rounded-lg bg-background-light dark:bg-background-dark text-primary dark:text-text-light"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-coral text-white dark:bg-primary py-3 rounded-lg hover:bg-opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 mt-12 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-primary dark:text-text-light mb-4">
                            Reach Out
                        </h3>
                        <p className="text-secondary dark:text-primary mb-6">
                            Urban Vector, 123 Creative Lane, Design City
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:info@urbanvector.com"
                                    className="text-primary dark:text-coral hover:underline"
                                >
                                    info@urbanvector.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="text-primary dark:text-coral hover:underline"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>
                        {/* Social Media Icons */}
                        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary dark:text-coral hover:opacity-80 text-2xl"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary dark:text-coral hover:opacity-80 text-2xl"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary dark:text-coral hover:opacity-80 text-2xl"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
