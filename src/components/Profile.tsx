import React from 'react';
import { Box, Heading, Text, Input, Button } from '@chakra-ui/react';

const Profile: React.FC = () => {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>
        Profile
      </Heading>

      <Text fontSize="lg" mb={6}>
        Update your personal information.
      </Text>

      {/* Personal Information */}
      <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Personal Information
        </Heading>

        <Text mb={2}>Full Name</Text>
        <Input placeholder="Enter your full name" mb={4} />

        <Text mb={2}>Email Address</Text>
        <Input placeholder="Enter your email" mb={4} />

        <Text mb={2}>Short Bio</Text>
        <Input placeholder="Tell us about yourself" mb={4} />
      </Box>

      {/* Save Profile Button */}
      <Button colorScheme="teal" width="full" mt={6}>
        Save Profile
      </Button>
    </Box>
  );
};

export default Profile;
