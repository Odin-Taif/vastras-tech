/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

// import Container from "@components/container";
// import Layout from "@components/layout";
// import { getClient } from "@lib/sanity";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "use-web3forms";
// import { configQuery } from "@lib/groq";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import qrlogo from "../public/myQR.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FiMapPin } from "react-icons/fi";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = "";

  //siteconfig?.w3ckey || "02c22b43-48c2-4fa1-8383-ce01c0cc494b";
  const { submit: onSubmit } = useWeb3Forms({
    apikey: apiKey,
    from_name: "Vestrås Tech AB",
    subject: "New Contact Message from sara Website",
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.3827613439657!2d16.5415329!3d59.6099896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e613f6eaf55a1%3A0xa02ab31c773de0b1!2sKungsgatan%202%2C%20722%2011%20V%C3%A4ster%C3%A5s!5e0!3m2!1sen!2sse!4v1674222383088!5m2!1sen!2sse"
        className="w-full"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      {/* <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1> */}
      {/* <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div> */}

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          {/* <h2 className="text-2xl font-semibold dark:text-white">
            Contact Sara
          </h2> */}
          {/* <p className="max-w-sm mt-5">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p> */}
          {/* <div className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-6 w-40">
            <Image
              alt="qrlogo"
              src={qrlogo}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 200px) 100vw, 200px"
              loader={() => value}
              unoptimized={true}
            />
          </div> */}
          {/* 
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <span></span>
            </div>
            {siteconfig?.email && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <MailIcon className="w-4 h-4" />
                <a href={`mailto:${siteconfig.email}`}>{siteconfig.email}</a>
              </div>
            )}
            {siteconfig?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${siteconfig.phone}`}>{siteconfig.phone}</a>
              </div>
            )}
          </div> */}
        </div>
        {/* <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div> */}
      </div>
      <div className="md:grid grid-cols-2 content-center justify-center bg-black m-auto p-2 sm:p-20">
        {/* <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0 bg-gray-700 border-t-2 border-purple-700 ">
            <div className="px-4 mx-4 my-4">
              <h3 className="text-lg font-medium leading-6 text-white p-4">
                Berätta gärna vad vill du ha hjälp med så når dig inom kort.
                <hr className="my-3" />
              </h3>
            </div>
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-gray-800 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="e.g John Erikson"
                        autoComplete="given-name"
                        className="mt-1  p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-white"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        placeholder="e.g John.erikson@email.com"
                        autoComplete="email"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className=" col-span-8 sm:col-span-12">
                      <label
                        htmlFor="about"
                        className="my-4 block text-sm font-medium text-white"
                      >
                        Berätta gärna vad du vill ha hjälp med så når vi dig
                        inom kort.
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          placeholder="e.g I have broken screen on my old phone ......"
                          rows={3}
                          className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700  px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-10 text-sm font-medium text-black shadow-sm hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
        <div className="bg-gray-700  p-20 border-b-2 border-purple-700">
          <div>
            <h4 className="text-3xl font-semibold text-white">
              <a
                href="https://www.google.com/maps/dir//V%C3%A4ster%C3%A5s+Tech+AB/data=!4m8!4m7!1m0!1m5!1m1!1s0x465e6177c01d8a57:0x8117349cbcdf9ca6!2m2!1d16.5420248!2d59.6102065"
                target="_blank"
              >
                <FiMapPin
                  size={25}
                  className="text-white m-2 hover:text-red-500"
                />
              </a>
              Adress
              <hr className="my-3" />
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600  text-gray-300">
              Kungsgatan 2
              <br /> 722 11 Västerås
              <br />
              {/* <span className="text-white"> Söndag Stängt</span> */}
            </h5>
          </div>
          <div>
            <h4 className="text-3xl font-semibold text-white">
              Öppettider <hr className="my-3" />
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-300">
              Måndag-Fredag 11:00-15:00 <br /> Lördag 11:00-15:00
              <br />
              <span className="text-red-500"> Söndag Stängt</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
