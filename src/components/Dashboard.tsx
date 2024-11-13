import React from 'react';
import { Box, Button, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Import components for Home, Profile, Settings, and ProductsTable
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import ProductsTable from './ProductsTable';  // Import Products Table

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const location = useLocation(); // Get current location/path
  const navigate = useNavigate(); // For navigation after logout
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
      case '/dashboard/products': // Render Products table on '/dashboard/products'
        return <ProductsTable />;
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

  // Handle logout
  const handleLogout = () => {
    onLogout();
    navigate('/'); // Navigate to homepage after logout (or to login page)
  };

  return (
    <Box minHeight="100vh" bg="gray.50">
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
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>

        {/* Desktop Navbar Links */}
        {!isMobile && (
          <Box>
            <Link to="/dashboard/home">
              <Button color="white" variant="ghost" _hover={{ bg: 'teal.500' }} mr={4}>Home</Button>
            </Link>
            <Link to="/dashboard/profile">
              <Button color="white" variant="ghost" _hover={{ bg: 'teal.500' }} mr={4}>Profile</Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button color="white" variant="ghost" _hover={{ bg: 'teal.500' }} mr={4}>Settings</Button>
            </Link>
            <Link to="/dashboard/products">
              <Button color="white" variant="ghost" _hover={{ bg: 'teal.500' }} mr={4}>Products</Button>
            </Link>
            <Link to="/">
              <Button onClick={handleLogout} color="white" variant="ghost" _hover={{ bg: 'red.500' }}>
                Logout
              </Button>
            </Link>
          </Box>
        )}

        {/* Mobile Navbar Links (No Drawer, just use Button toggling) */}
        {isMobile && (
          <Button onClick={toggleMenu} color="white" variant="ghost">
            ☰
          </Button>
        )}
      </Flex>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.6)"
          zIndex={999}
          onClick={toggleMenu}
        >
          <Box
            position="absolute"
            top={0}
            right={0}
            bg="white"
            width="250px"
            height="100%"
            boxShadow="xl"
            p={4}
          >
            <Link to="/dashboard/home">
              <Button w="100%" mb={2} variant="ghost" _hover={{ bg: 'teal.500' }}>Home</Button>
            </Link>
            <Link to="/dashboard/profile">
              <Button w="100%" mb={2} variant="ghost" _hover={{ bg: 'teal.500' }}>Profile</Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button w="100%" mb={2} variant="ghost" _hover={{ bg: 'teal.500' }}>Settings</Button>
            </Link>
            <Link to="/dashboard/products">
              <Button w="100%" mb={2} variant="ghost" _hover={{ bg: 'teal.500' }}>Products</Button>
            </Link>
            <Button w="100%" mb={2} variant="ghost" _hover={{ bg: 'red.500' }} onClick={handleLogout}>Logout</Button>
          </Box>
        </Box>
      )}

      {/* Render the content based on the current route */}
      <Box p={4}>{renderContent()}</Box>
    </Box>
  );
};

export default Dashboard;
