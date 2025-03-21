import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format";
    }
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.mobile.match(/^\d{10}$/)) {
        newErrors.mobile = "Invalid mobile number";
      }
      if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(isLogin ? "Login successful!" : "Sign-up successful!");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex overflow-hidden">
      <motion.div
        className="absolute w-1/2 h-full bg-black"
        initial={{ x: 0 }}
        animate={{ x: isLogin ? 0 : "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src="@/public/images/1.png"
          alt="Authentication"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="relative w-full md:w-1/2 flex items-center justify-center p-8"
        initial={{ x: 0 }}
        animate={{ x: isLogin ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
            <CardDescription>
              {isLogin ? "Enter your credentials to access your account." : "Create an account to get started."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "signup"}
                initial={{ x: isLogin ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isLogin ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Enter your name" onChange={handleChange} required />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile No</Label>
                      <Input id="mobile" name="mobile" placeholder="Mobile no" onChange={handleChange} required />
                      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="m@example.com" onChange={handleChange} required />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" onChange={handleChange} required />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} required />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                  </div>
                )}
                <Button type="submit" className="w-full">{isLogin ? "Login" : "Sign Up"}</Button>
              </motion.form>
            </AnimatePresence>
          </CardContent>
          <CardFooter>
            <Button variant="link" onClick={toggleForm} className="w-full">
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
