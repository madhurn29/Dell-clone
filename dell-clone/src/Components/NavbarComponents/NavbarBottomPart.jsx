import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Menu,
  Button,
  MenuButton,
  MenuList,
  //   Text,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function NavbarBottomPart() {
  return (
    <Box mt="10px" border="1px solid re">
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Apex
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/about">View All Apex</RouterLink>
          </MenuItem>
          <MenuItem>Compute % HCI</MenuItem>
          <MenuItem>Storage</MenuItem>
          <MenuItem>Cyber & Data Protection</MenuItem>
          <MenuItem>Create a Custom Solution</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Products
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/products">Laptops</RouterLink>
          </MenuItem>
          <MenuItem>Desktops & All-In-Ones</MenuItem>
          <MenuItem>Gaming</MenuItem>
          <MenuItem>Workstations</MenuItem>
          <MenuItem>Thin Clients</MenuItem>
          <MenuItem>Servers</MenuItem>
          <MenuItem>Data Storage</MenuItem>
          <MenuItem>Data Protection</MenuItem>
          <MenuItem>Networking</MenuItem>
          <MenuItem>Hyperconveged Infrastructures</MenuItem>
          <MenuItem>Monitors</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Solutions
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/solutions">View All Solutions</RouterLink>
          </MenuItem>
          <MenuItem>Cloud Solutions</MenuItem>
          <MenuItem>DevOps Tools and Solutions</MenuItem>
          <MenuItem>Edge Solutions</MenuItem>
          <MenuItem>Industry Solutions</MenuItem>
          <MenuItem>Infrastructer Solutions</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Services
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/services">View All View All Services</RouterLink>
          </MenuItem>
          <MenuItem>Consultion Services</MenuItem>
          <MenuItem>Deployment Services</MenuItem>
          <MenuItem>Support Services</MenuItem>
          <MenuItem>Residency Services</MenuItem>
          <MenuItem>Education Services</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Support
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/support">Support Home</RouterLink>
          </MenuItem>
          <MenuItem>Support Library</MenuItem>
          <MenuItem>Support Services & Warranty</MenuItem>
          <MenuItem>Drivers & Downloads</MenuItem>
          <MenuItem>Manuals & Documentation</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          Deals
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/deals">Laptop Deals</RouterLink>
          </MenuItem>
          <MenuItem>Desktop Deals</MenuItem>
          <MenuItem>Gaming PC Deals</MenuItem>
          <MenuItem>XPS Laptop Deals</MenuItem>
          <MenuItem>Workstation Deals</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
        //   rightIcon={<ChevronDownIcon />}
        >
          Find A Store
        </MenuButton>
        <MenuList>
          
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          border="none"
          fontWeight="400"
          borderRadius="none"
          rightIcon={<ChevronDownIcon />}
        >
          About Us
        </MenuButton>
        <MenuList zIndex={9}>
          <MenuItem>
            <RouterLink to="/about">What We Do</RouterLink>
          </MenuItem>
          <MenuItem>Who We Are</MenuItem>
          <MenuItem>Newsroom</MenuItem>
          <MenuItem>ESG & Impact</MenuItem>
          <MenuItem>Recycling</MenuItem>
          <MenuItem>Investors</MenuItem>
          <MenuItem>Dell Technologies Capital</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavbarBottomPart;
