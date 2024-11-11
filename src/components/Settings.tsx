import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Settings: React.FC = () => {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>
        Settings
      </Heading>

      <Text fontSize="lg" mb={6}>
        Manage your preferences here.
      </Text>

      {/* Theme Preferences */}
      <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Theme Preferences
        </Heading>
        <Text mb={4}>Switch between light and dark themes:</Text>
        <Button colorScheme="teal" variant="outline" width="full">
          Change Theme
        </Button>
      </Box>

      {/* Notifications */}
      <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Notifications
        </Heading>
        <Text mb={4}>Enable or disable notifications:</Text>
        <Button colorScheme="teal" variant="outline" width="full">
          Toggle Notifications
        </Button>
      </Box>

      {/* Save Settings Button */}
      <Button colorScheme="teal" width="full" mt={6}>
        Save Settings
      </Button>
    </Box>
  );
};

export default Settings;
