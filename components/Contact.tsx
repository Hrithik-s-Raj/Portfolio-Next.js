import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rhrithik1@gmail.com?subject=${formData.subject}&body=Hi,My name is ${formData.name}.${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:flex:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col space-y-3 mt-[150px]">
        <h4 className="text-xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#f7ab01]/50 underline"> Lets Talk</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 justify-center ">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-md">8943921454</p>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-md">rhrithik1@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-md">Chennai</p>
          </div>
        </div>

        {/* react hook form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#f7ab0a] py-3 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
