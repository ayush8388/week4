"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
        name: z.string().min(3, "Name must be at least 3 characters"),
        email: z.string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address"),
        age: z.coerce.number().min(18, "Age must be at least 18").max(100, "Age must be less than 100"),
        password: z.string().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
        confirmPassword: z.string().min(6, "Confirm Password is required")
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"], 
        message: "Passwords do not match",
    });
          
    

function SignUpWithZod() {
    const {register, handleSubmit , formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    });
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
            {...register("name")}
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
            {...register("email")}
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
            {...register("age")}
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
            {...register("password",)}
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
            {...register("confirmPassword",)}
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

export default SignUpWithZod