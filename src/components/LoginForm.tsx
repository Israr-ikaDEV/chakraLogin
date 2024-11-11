import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in both fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard'); // Redirect after successful login
    }, 1500);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      p="6"
      borderWidth="2px"
      borderRadius="2xl"
      boxShadow="2xl"
      bg="gray.100"
      borderColor="black"
      
    >
      <Heading as="h2" size="lg" textAlign="center" mb="6">
        Login Form
      </Heading>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
            Email
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            id="email"
            style={{
              borderColor: error && !formData.email ? 'red' : '#e2e8f0',
              marginBottom: '0.5rem',
            }}
          />
          {error && !formData.email && (
            <Text color="red.500" fontSize="sm">{error}</Text>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              id="password"
              style={{
                borderColor: error && !formData.password ? 'red' : '#e2e8f0',
                marginBottom: '0.5rem',
              }}
            />
            <Button
              onClick={togglePasswordVisibility}
              variant="ghost"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: 0,
              }}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </Button>
          </div>
          {error && !formData.password && (
            <Text color="red.500" fontSize="sm">{error}</Text>
          )}
        </div>

        {/* Submit Button */}
        <Button
         colorScheme='blue'
         bg="blue.500"
          type="submit"
          width="full"
          variant="solid"
          disabled={isSubmitting} // Disable the button during submission
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
