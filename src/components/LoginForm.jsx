"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import axios from "axios"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    emailOrMobile: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { emailOrMobile: "", password: "" }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const mobileRegex = /^[0-9]{10}$/

    if (!formData.emailOrMobile.trim()) {
      newErrors.emailOrMobile = "Email or mobile number is required"
      isValid = false
    } else if (!emailRegex.test(formData.emailOrMobile) && !mobileRegex.test(formData.emailOrMobile)) {
      newErrors.emailOrMobile = "Please enter a valid email or 10-digit mobile number"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const response = await axios.post("http://localhost:3001/create", {
        M_no: formData.emailOrMobile,
        Password: formData.password,
      })
      console.log(response.data) // Log response from the server
      alert("Login successful!") // Show success message
      setFormData({ emailOrMobile: "", password: "" }) // Reset form
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message)
      alert("Login failed. Please try again.") // Show error message
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emailOrMobile">Email or Mobile Number</Label>
            <Input
              id="emailOrMobile"
              name="emailOrMobile"
              type="text"
              placeholder="Enter your Email or mobile no"
              value={formData.emailOrMobile}
              onChange={handleChange}
              className={`pr-10 border-2 border-gray-400 focus:outline-none focus:border-orange-500 hover:border-orange-500 px-3 py-2 w-full ${
                errors.emailOrMobile ? "border-red-500" : ""
              }`}
            />
            {errors.emailOrMobile && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.emailOrMobile}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`pr-10 border-2 border-gray-400 focus:outline-none focus:border-orange-500 hover:border-orange-500 px-3 py-2 w-full ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.password}
              </p>
            )}
          </div>

          <div className="mt-5 text-center">
            <Button type="submit" className="w-full font-semibold bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
              Sign In
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
