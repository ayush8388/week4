"use client"
import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function login() {
    const [form, setform] = useState({
        email: "",
        password: "", 
        confirmPassword: ""
      })
    
      const [errors, setErrors] = useState({
        email: "",
        password: "", 
        confirmPassword: ""
      })
    
      const validateForm = ({ name, value }) => {
        if (name === "email") {
          if (!value) {
            setErrors((prev) => ({ ...prev, email: "Email is required" }))
          } else {
            setErrors((prev) => ({ ...prev, email: "" }))
          }
        }
    
        if (name === "password") {
          if (!value) {
            setErrors((prev) => ({ ...prev, password: "Password is required" }))
          } else if (value.length < 6) {
            setErrors((prev) => ({...prev, password: "Password must be at least 6 characters"}))
          } else {
            setErrors((prev) => ({ ...prev, password: "" }))
          }
        }
    
        if (name === "confirmPassword") {
          if (!value) {
            setErrors((prev) => ({...prev, confirmPassword: "Confirm Password is required"}))
          } else if (value !== form.password) {
            setErrors((prev) => ({...prev, confirmPassword: "Passwords do not match"}))
          } else {
            setErrors((prev) => ({ ...prev, confirmPassword: "" }))
          }
        }
      }
    
      const handleChange = (e) => {
        const {name, value} = e.target
        setform({...form, [name]: value})
        validateForm({name, value})
      }
    
      const submitHandler = (e) => {
        e.preventDefault()
        alert("Form submitted")
        console.log(form)
      }
  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Input Form</h1>
      <div className="p-4 min-w-[40vw] shadow-lg rounded-md bg-white my-auto">
        <form onSubmit={submitHandler}>
          <div className="p-3">
            <label className="block  text-sm font-medium text-gray-900">Email</label>
            <Input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Enter your email"
              label="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">password</label>
            <Input 
              type="password"
              name="password" 
              id="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
            <Input 
              type="password"
              name="confirmPassword" 
              id="confirmPassword"
              placeholder="Enter your password again"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <div className="p-3">
            <Button className="w-full p-3" type='submit'>Submit</Button>
          </div>
        
        </form>
      </div>
    </div>
  )
}

export default login