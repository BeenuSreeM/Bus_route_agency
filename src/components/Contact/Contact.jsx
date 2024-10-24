import React from 'react';
import "./Contact.css";
import images from '../../constants/images';
import { Formik } from 'formik';
import Info from './Info';
import Map from './Map';

const Contact = () => {
  return (
    <section className='contact section-p-top bg-black' id="contact">
      <div className='container'>
        <div className='contact-content grid text-center'>
          <div className='contact-left'>
            <div className='section-t'>
              <h3>Contact Us</h3> 
              <p className='text'>
                Have questions about your journey or need assistance with booking? 
                Our customer support team is here to help you with all your travel needs.
              </p>
              <p className='text'>
                Whether you need help with planning your bus route, checking schedules, or managing your bookings, 
                we're dedicated to providing you with the best service possible. Don't hesitate to reach out!
              </p>
            </div>

            <Formik
              initialValues={{ name: "", email: '', message: '' }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name is required";
                } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                  errors.name = "Invalid name format";
                }

                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='form-elem'>
                    <input 
                      type="text" 
                      name="name" 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.name} 
                      className="form-control" 
                      placeholder="Your Name"
                    />
                    <span className='form-control-text'>
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>

                  <div className='form-elem'>
                    <input 
                      type="email" 
                      name="email" 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.email} 
                      className="form-control" 
                      placeholder="Your Email"
                    />
                    <span className='form-control-text'>
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>

                  <div className='form-elem'>
                    <textarea 
                      name="message" 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      value={values.message} 
                      className="form-control" 
                      placeholder="Your Message"
                      rows="4"
                    />
                    <span className='form-control-text'>
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>

                  <div className='flex flex-start'>
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="submit-btn"
                    >
                      Contact Us
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className='contact-right'>
          
            <img src={images.portfolio_img_2} alt="Bus Service" />
          </div>
        </div>
      </div>

      <Map />
      <Info />
    </section>
  );
};

export default Contact;
