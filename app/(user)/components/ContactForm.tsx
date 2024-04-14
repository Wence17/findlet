'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { Inputs } from '@/typings'


const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const [checked, setChecked] = useState(false)
  const [errored, setErrored] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (formData:Inputs) => {
    if (!checked) return setErrored(true)
    window.location.href = `mailto:findlet142@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.firstName} ${formData.lastName}. ${formData.message}`
  }
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm md:max-w-xl lg:max-w-2xl mx-auto px-5"
        >
          <div className="flex flex-wrap -mx-3 md:mb-6">
            <div className="w-1/2 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-black text-xs font-semibold mb-2 "
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-[#F5F6F7] text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white"
                id="grid-first-name"
                {...register('firstName')}
                type="text"
                required
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-[#F5F6F7] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none shadow-sm focus:bg-white"
                id="grid-last-name"
                {...register('lastName')}
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 md:mb-6">
            <div className="w-1/2 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="grid-first-name"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-[#F5F6F7] text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white"
                id="grid-first-name"
                {...register('phoneNumber')}
                type="text"
                required
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-[#F5F6F7] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none shadow-sm focus:bg-white"
                id="grid-last-name"
                {...register('subject')}
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 md:mb-6">
            {' '}
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black text-xs font-semibold mb-2 "
                htmlFor="grid-first-name"
              >
                Your Message
              </label>

              <textarea
                className="appearance-none block w-full bg-[#F5F6F7] text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight
               focus:outline-none shadow-sm focus:bg-white"
                id="story"
                {...register('message')}
                rows={5}
                required
                cols={33}
              />
            </div>
          </div>

          {/*First checkbox*/}
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] max-w-sm md:max-w-xl  text-center mx-auto">
            <input
              className="mr-2"
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            />
            <span>
              I agree that my submitted data is being collected and stored
            </span>
            {errored && (
              <div className="text-red-500 ml-6 text-left text-xs">
                Kindly check the box.
              </div>
            )}
            <button
              className="my-6 p-3 md:p-6 rounded-full font-bold text-white text-xs max-w-fit bg-[#FF6A48]
           hover:bg-[#0264c7] dark:bg-[#FF6A48] dark:hover:bg-blue-700 dark:focus:ring-blue-800
            disabled:opacity-40 disabled:cursor-not-allowed block mx-auto uppercase"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
