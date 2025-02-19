import React from 'react';
import "./Testimonials.css";
import sections from '../../constants/data';
import { MdStar } from "react-icons/md";

// Update gradient to bus brand color
const gradient = "#bc9b22";  // Bus branding color

const Testimonials = () => {

    let startList;
    const showRating = (starCount) => {
        startList = new Array(starCount);
        for (let i = 0; i < startList.length; i++) {
            startList[i] = <MdStar size={25} style={{ fill: gradient }} />;  // Star color set to branding color
        }
        return startList;
    }

    return (
        <section className='testimonials section-p bg-black' id="testimonials">
            <div className='container'>
                <div className='testimonials-content'>
                    <div className='section-t text-center'>
                        <h3>Customer Testimonials</h3>
                        <p className='text'>
                          Hear what our passengers have to say about their experience with our reliable and comfortable bus services.
                        </p>
                    </div>

                    <div className='item-list grid text-white text-center'>
                        {
                            sections.testimonials.map(testimonial => {
                                showRating(testimonial.rating);
                                return (
                                    <div className='item translate-effect bg-dark' key={testimonial.id}>
                                        <div className='item-img'>
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                        <h4 className='item-name'>{testimonial.name}</h4>
                                        <p className='item-text text'>{testimonial.text}</p>
                                        <ul className='flex item-rating flex-center'>
                                            {
                                                startList.map((star, index) => (
                                                    <li key={index}>{star}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
