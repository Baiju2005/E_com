import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Contact form data:", data);
        alert("Thank you for reaching out! We'll get back to you soon.");
        reset(); 
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
            <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                   
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                  
                    <div>
                        <label className="block text-gray-700 mb-1">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            {...register("message", { required: "Message is required" })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        ></textarea>
                        {errors.message && (
                            <p className="text-sm text-red-500">{errors.message.message}</p>
                        )}
                    </div>

                    
                    <input type="submit" value="Submit" className='btn btn-neutral mt-4' />
                </form>
            </div>
        </section>
    );
};

export default Contact;
