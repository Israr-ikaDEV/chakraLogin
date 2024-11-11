import React from 'react';
import { Box, Button, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

// Import your components for Home, Profile, and Settings
import Home from './Home';      // Assume these are components you already created
import Profile from './Profile';
import Settings from './Settings';

const Dashboard: React.FC = () => {
  const location = useLocation(); // Get current location/path
  const isMobile = useBreakpointValue({ base: true, md: false }); // Determine if the screen size is mobile
  
  // Conditionally render based on the current route
  const renderContent = () => {
    switch (location.pathname) {
      case '/dashboard/home':
        return <Home />;
      case '/dashboard/profile':
        return <Profile />;
      case '/dashboard/settings':
        return <Settings />;
      default:
        return <div>Welcome to your Dashboard! Select a page from the navbar.</div>;
    }
  };

  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box minHeight="100vh" bg="gray.50">
      {/* Navbar Section */}
      <Flex
        as="nav"
        bg="teal.600"
        color="white"
        p={4}
        justify="space-between"
        align="center"
        position="sticky"
        top={0}
        zIndex={1}
        boxShadow="sm"
      >
        {/* Dashboard Title */}
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>

        {/* Menu Button for Mobile Screens */}
        {isMobile && (
          <Button
            color="white"
            variant="ghost"
            onClick={toggleMenu}
            _hover={{ bg: 'teal.500' }}
          >
            Menu
          </Button>
        )}

        {/* Navbar Links for Desktop Screens */}
        {!isMobile && (
          <Box>
            <Link to="/dashboard/home">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                mr={4}
              >
                Home
              </Button>
            </Link>
            <Link to="/dashboard/profile">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                mr={4}
              >
                Profile
              </Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                mr={4}
              >
                Settings
              </Button>
            </Link>
            <Link to="/">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
              >
                Log Out
              </Button>
            </Link>
          </Box>
        )}
      </Flex>

      {/* Mobile Menu for Small Screens */}
      {isMobile && isMenuOpen && (
        <Box
          bg="teal.600"
          color="white"
          p={4}
          position="absolute"
          top={16}
          left={0}
          right={0}
          zIndex={1}
        >
          <Box mb={4}>
            <Link to="/dashboard/home">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                w="100%"
                mb={2}
              >
                Home
              </Button>
            </Link>
            <Link to="/dashboard/profile">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                w="100%"
                mb={2}
              >
                Profile
              </Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                w="100%"
                mb={2}
              >
                Settings
              </Button>
            </Link>
            <Link to="/">
              <Button
                color="white"
                variant="ghost"
                _hover={{ bg: 'teal.500' }}
                w="100%"
              >
                Log Out
              </Button>
            </Link>
          </Box>
          <Button
            color="white"
            variant="ghost"
            onClick={toggleMenu}
            _hover={{ bg: 'teal.500' }}
            w="100%"
          >
            Close Menu
          </Button>
        </Box>
      )}

      {/* Main Content Section */}
      <Box p={6} bg="gray.100">
        <Heading as="h2" size="xl" mb={6}>
          Welcome to Your Dashboard!
        </Heading>

        {/* Render the active route's content */}
        <Box bg="white" p={5} borderRadius="md" boxShadow="md">
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
