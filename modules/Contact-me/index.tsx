import { FaInstagram, FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";

const ContactMe = () => {
    return (
        <section id="contact-me">
            <div className="containers">
                <div className="flex py-10 flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    {/* Left: Social links */}
                    <div>
                        <div className="py-5">
                            <h1 className="text-3xl font-semibold text-sky-500 mb-2">Connect with me:</h1>
                            <p className="text-gray-300 text-base">Satisfied with me? Please contact me</p>
                        </div>

                        <div className="flex items-center gap-4 text-white text-2xl">
                            <a href="https://www.instagram.com/by.nuriddinov/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@nuriddinov_developer" target="_blank">
                                <FaYoutube />
                            </a>
                            <a href="https://t.me/hamroz_nuriddinov" target="_blank">
                                <FaTelegram />
                            </a>
                            <a href="tel:+998951883453" target="_blank">
                                <FaPhone />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact form */}
                    <div className="w-[500px] bg-[#1a2035] p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Contact me, let’s make magic together
                        </h2>
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="py-2 px-4 rounded-md bg-[#0f1524] text-white border border-gray-600 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="py-2 px-4 rounded-md bg-[#0f1524] text-white border border-gray-600 focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                role="4"
                                className="py-2 px-4 rounded-md bg-[#0f1524] text-white border border-gray-600 focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-sky-500 rounded-md px-3 py-2 text-white font-semibold cursor-pointer hover:bg-sky-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
