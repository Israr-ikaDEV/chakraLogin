import React from 'react';
import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to your Dashboard, Israr!
      </Heading>

      <Text fontSize="lg" mb={6}>
        Here’s a quick look at your current stats as a frontend developer:
      </Text>

      {/* Developer Stats */}
      <SimpleGrid columns={{ base: 1, md: 3 }} width="100%" >
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
          <Heading as="h3" size="md" mb={2}>
            Projects Completed
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            15
          </Text>
        </Box>

        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
          <Heading as="h3" size="md" mb={2}>
            Github Repos
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            25
          </Text>
        </Box>

        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={6}>
          <Heading as="h3" size="md" mb={2}>
            Contributions This Month
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            45
          </Text>
        </Box>
      </SimpleGrid>

      {/* Recent Projects */}
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Recent Projects
        </Heading>
        <Text fontSize="lg">
          - Personal Portfolio
          <br />
          - E-commerce Site
          <br />
          - Blog Platform
        </Text>
      </Box>

      {/* View Projects Button */}
      <Button colorScheme="teal" width="full" mt={6}>
        View Projects
      </Button>
    </Box>
  );
};

export default Home;
