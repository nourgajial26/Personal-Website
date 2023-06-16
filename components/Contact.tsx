import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (formData) => {
    const emailParams = {
      from_name: formData.name,
      reply_to: formData.email,
      to_name: 'Nour Gajial', // Replace with your name or recipient's name
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send('service_pjrfi0z', 'template_exjh2n2', emailParams, '_k6UoVL7xvttcom1f');
      console.log('Email sent successfully!');
      reset(); // Reset the form fields

      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    }
  });

  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row md:text-left max-w-full px-10 justify-evenly mx-auto items-center bg-gradient-to-t from-gray-900 to-gray-700">
    <video
        className="absolute top-0 left-0 w-full min-w-[100%] h-full object-cover"
        src="/water.mp4"
        autoPlay
        muted
        loop
        style={{ opacity: 0.09 }}
    ></video>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">Contact</h3>

      <div className="flex flex-col z-20 text-gray-100">
        <div className="space-y-5">
          {/* <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0edaff] h-7 w-7 animate-pulse" />
            <p className="text-lg text-gray-100  tracking-[2px] ">Happy to chat!</p>
          </div> */}

          <form onSubmit={onSubmit} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2 text-gray-100">
              <input
                {...register('name', { required: true })}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
              <input
                {...register('email', { required: true })}
                placeholder="Email"
                className="contactInput opacity-100"
                type="email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <input
              {...register('subject', { required: true })}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            {errors.subject && <span className="text-red-500">Subject is required</span>}

            <textarea
              {...register('message', { required: true })}
              placeholder="Message"
              className="contactInput"
            />
            {errors.message && <span className="text-red-500">Message is required</span>}

            <button type="submit" className="bg-[#0edaff]/30 py-5 px-10 rounded-md shadow-xl">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
