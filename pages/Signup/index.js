"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { usePasswordValidation } from "@/hooks/usePasswordValidation"

function Signup() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm({mode: "onChange"});
    const {validatePassword, validateConfirmPassword} = usePasswordValidation()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Signup Form</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Name</label>
            <input
            {...register("name",{
                required: "Name is required",
                minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                }
            })}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input
            {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            })}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Age</label>
            <input
            {...register("age",{
                required: "Age is required",
                min: {
                    value: 18,
                    message: "Age must be at least 18"
                },
                max: {
                    value: 100,
                    message: "Age must be less than 100"
                }
            })}
              type="number"
              name="age"
              placeholder="Enter your age"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Password</label>
            <input
            {...register("password", {
                validate: (value) => validatePassword(value)
            })}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Confirm Password</label>
            <input
            {...register("confirmPassword",{
                validate: (value) => validateConfirmPassword( watch("password"),value)
            })}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
