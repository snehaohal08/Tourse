import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from 'lucide-react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3 || formData.username.length > 20) {
      newErrors.username = 'Username must be between 3 and 20 characters';
    }

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2 || formData.fullName.length > 50) {
      newErrors.fullName = 'Full name must be between 2 and 50 characters';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one letter';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one special character';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username <span className="text-red-500">*</span></Label>
            <Input id="username" name="username" type="text" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
            {errors.username && <div className="text-red-500 text-sm mt-1">{errors.username}</div>}
          </div>

          <div>
            <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
            <Input id="fullName" name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
            {errors.fullName && <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>}
          </div>

          <div>
            <Label htmlFor="mobile">Mobile <span className="text-red-500">*</span></Label>
            <Input id="mobile" name="mobile" type="tel" placeholder="Enter your 10-digit mobile number" value={formData.mobile} onChange={handleChange} />
            {errors.mobile && <div className="text-red-500 text-sm mt-1">{errors.mobile}</div>}
          </div>

          <div>
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>

          <div>
            <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
            <Input id="password" name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password <span className="text-red-500">*</span></Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
          </div>

          <div className="mt-5 text-center">
            <Button type="submit" className="w-full font-semibold bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">Sign Up</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
