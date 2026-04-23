import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    // service_rmt2c5h
    //template_nn1nz9x
    //public_key: mHGZ4cW_EUEHtfG7t
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_rmt2c5h',
                'template_nn1nz9x',
                {
                    form_name: form.name,
                    to_name: 'Ghulam Abbas',
                    form_email: form.email,
                    to_email: 'ghulamabbas20054@gmail.com',
                    message: form.message
                },
                'mHGZ4cW_EUEHtfG7t'
            )
            setLoading(false);
            alert('Your message has been sent!')

            setForm({
                name:'',
                email:'',
                message:''
            })
        } catch (error) {
            setLoading(false);
            console.log(error);

            alert('Something went wrong!')
        }
    }

    return (
        <section className="c-space my-20" id="contact"> 
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}
                <div className="contact-container w-full max-w-lg bg-gray-950 rounded-2xl p-8 md:p-10
                        shadow-[0_0_50px_rgba(0,0,0,0.8),_0_0_20px_rgba(0,0,0,0.5)] border border-gray-800">
                    <h3 className="head-text text-white text-3xl font-bold mb-4">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label text-gray-300 block mb-2 transition-colors duration-300 hover:text-blue-400">
                                Full Name
                            </span>
                            <input
                                type="text" name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-950 text-white placeholder-gray-500 rounded-md
                           shadow-inner-lg shadow-inner-lg-glow border border-gray-800 focus:outline-none focus:border-blue-500 p-3
                           transition-shadow duration-300 ease-in-out focus:shadow-[0_0_10px_rgba(0,123,255,0.5)_inset]"
                                placeholder="Jhon Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-gray-300 block mb-2 transition-colors duration-300 hover:text-blue-400">
                                Email
                            </span>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-950 text-white placeholder-gray-500 rounded-md
                           shadow-inner-lg shadow-inner-lg-glow border border-gray-800 focus:outline-none focus:border-blue-500 p-3
                           transition-shadow duration-300 ease-in-out focus:shadow-[0_0_10px_rgba(0,123,255,0.5)_inset]"
                                placeholder="jhondoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-gray-300 block mb-2 transition-colors duration-300 hover:text-blue-400">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-gray-950 text-white placeholder-gray-500 rounded-md
                           shadow-inner-lg shadow-inner-lg-glow border border-gray-800 focus:outline-none focus:border-blue-500 p-3
                           transition-shadow duration-300 ease-in-out focus:shadow-[0_0_10px_rgba(0,123,255,0.5)_inset]"
                                placeholder="Hi I'm interested in....."
                            />
                        </label>
                        <button className="relative flex items-center justify-center gap-2
                         bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md py-3 px-6
                         transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
                         shadow-lg-glow" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"></img >
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact