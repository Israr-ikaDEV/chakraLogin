import React, { useState } from 'react';
import { Box, Button, Input, Table, Text, Heading } from '@chakra-ui/react';
import { Product, productsData } from './products'; // Import Product interface and data

const ProductsTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData); // Use imported data
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isEditing, setIsEditing] = useState<string | null>(null); // Track which product is being edited
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    name: '',
    price: '0.00',
    category: '',
  });

  // Function to parse price from string to number
  const parsePrice = (price: string): number => {
    return parseFloat(price);
  };

  // Sorting function
  const sortData = () => {
    const sorted = [...products].sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);

      if (isNaN(priceA) || isNaN(priceB)) return 0; // Avoid errors if price is invalid

      return sortDirection === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setProducts(sorted);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete product
  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Start editing a product
  const startEditing = (product: Product) => {
    setIsEditing(product.id);
    setNewProduct({ ...product }); // Fill form with existing product data
  };

  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(null);
    setNewProduct({
      id: '',
      name: '',
      price: '0.00',
      category: '',
    });
  };

  // Save the product (either new or updated)
  const saveProduct = () => {
    if (newProduct.id === '') {
      // Add new product
      const newId = (products.length + 1).toString();
      const newProductToAdd = { ...newProduct, id: newId };
      setProducts([...products, newProductToAdd]);
    } else {
      // Update existing product
      setProducts(products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      ));
    }
    cancelEditing(); // Reset editing state after saving
  };

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Product Management</Heading>
      
      <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
        {/* Search Bar */}
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for products"
          width="300px"
        />
      </Box>

      {/* Table with inline editing */}
      <Table.Root   showColumnBorder  interactive colorPalette="teal" variant='outline'>
        <Table.Header bgColor='teal' color='white'>
          <Table.Row>
            <Table.Cell onClick={sortData} style={{ cursor: 'pointer' }}>
              Price {sortDirection === 'asc' ? '▲' : '▼'}
            </Table.Cell>
            <Table.Cell>Product Name</Table.Cell>
            <Table.Cell>Category</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredProducts.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                {isEditing === product.id ? (
                  <Input
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    size="sm"
                    type="number"
                  />
                ) : (
                  parsePrice(product.price).toFixed(2)
                )}
              </Table.Cell>
              <Table.Cell>
                {isEditing === product.id ? (
                  <Input
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    size="sm"
                  />
                ) : (
                  product.name
                )}
              </Table.Cell>
              <Table.Cell>
                {isEditing === product.id ? (
                  <Input
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    size="sm"
                  />
                ) : (
                  product.category
                )}
              </Table.Cell>
              <Table.Cell>
                {isEditing === product.id ? (
                  <>
                    <Button colorScheme="blue" size="sm" onClick={saveProduct} mr={2}>Save</Button>
                    <Button colorScheme="red" size="sm" onClick={cancelEditing}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Button bgColor="orange.300" size="sm" onClick={() => startEditing(product)} mr={2}>Edit</Button>
                    <Button  bgColor='red' size="sm" onClick={() => deleteProduct(product.id)}>Delete</Button>
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        {/* Add new product row */}
        {isEditing === null && (
          <Table.Row>
            <Table.Cell>
              <Input
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                size="sm"
                type="number"
                placeholder="Price"
              />
            </Table.Cell>
            <Table.Cell>
              <Input
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                size="sm"
                placeholder="Product Name"
              />
            </Table.Cell>
            <Table.Cell>
              <Input
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                size="sm"
                placeholder="Category"
              />
            </Table.Cell>
            <Table.Cell>
              <Button colorScheme="teal" size="sm" onClick={saveProduct}>Add Product</Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Root>

      {/* Total products */}
      <Text textAlign="center" mt={4}>Total Products: {filteredProducts.length}</Text>
    </Box>
  );
};

export default ProductsTable;
