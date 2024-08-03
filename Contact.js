import React from 'react';
import { useState } from "react";
import { useForm, handleSubmit, Submithandler } from "react-hook-form";
import gmail from './gmail.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import github from './github.png';
import phone from './phone.png';




function Contact() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm("");

    return (
        <section class="contact" id="contact">
            <div class="contact-text">
                <h2><span class="text-info-emphasis">Contact</span> <span class="text-success">Me</span></h2>
                <h4>Let's work Together</h4>
                <p>I am dedicated to delivering clean, efficient code and thrive in collaborative environments where ideas
                    are shared and refined.
                    My goal is to contribute my skills and enthusiasm to projects that push boundaries and make a positive
                    impact.</p>
                <div class="contact-list">
                    <li><img width='10px' src={gmail} alt='gmail.png' /> Malarvizhimoorthi1771997@gmail.com</li>
                    <li><img width='20px' src={phone} alt='phone.png' />6369472599</li>
                </div>
                <div class="contact-icons">
                    <a href="#"><img width='20px' src={gmail} alt='gmail.png' /></a>
                    <a href="#"><img width='25px' src={facebook} alt='facebook.png' /></a>
                    <a href="#"><img width='20px' src={linkedin} alt='linkedin.png' /></a>
                    <a href="#"><img width='20px' src={github} alt='github.png' /></a>
                </div>
            </div>

            <div class="contact-form">
                <form action="Success.html" method="get"
                    onSubmit={handleSubmit((data) =>
                        console.log(data)
                    )}>
                    <div className="input-container">
                        <p className="error-message">{errors.Name?.message}</p>
                        <label htmlFor="name"> Your Name*</label>
                        <input
                            {...register("Name", {
                                required: " name required",
                                pattern: {
                                    message: "Please Enter name",
                                },
                            })}
                            type="name"
                            id="name"
                            className={`${errors.Name && "input-error"}`}
                        />
                    </div>

                    <div className="input-container">
                        <p className="error-message">{errors.email?.message}</p>
                        <label htmlFor="email">Your Email*  </label>
                        <input
                            {...register("email", {
                                required: "Please Enter Your Email!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please Enter A Valid Email!",
                                },
                            })}
                            type="email"
                            id="email"
                            className={`${errors.email && "input-error"}`}
                        />
                    </div>
                    <div className="input-container">
                        <p className="error-message">{errors.subject?.message}</p>
                        <label htmlFor="subject"> Your Subject*</label>
                        <input
                            {...register("subject", {
                                required: "Please Enter Your subject!",

                            })}
                            type="subject"
                            id="subject"
                            className={`${errors.subject && "input-error"}`}
                        />
                    </div>

                    <div className="input-container">
                        <p className="error-message">{errors.message?.message}</p>
                        <label htmlFor="Your Message">Your Message*</label>
                        <textarea
                            {...register("Your Message", {
                                required: "Please Enter Your  Message!",

                            })}
                            type="Your Message"
                            id="Your Message"
                            cols="40"
                            rows="10"
                            className={`${errors.Message && "input-error"}`}
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>

                </form>
            </div>
        </section>


    )
}
export default Contact;