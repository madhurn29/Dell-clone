import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  Button,
  MenuList,
  chakra,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

function FooterPart() {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Box>
      <Box
        // border="1px solid red"
        bg="#f0f0f0"
        fontSize={"14px"}
        lineHeight={"25px"}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"8xl"}
          width="100%"
          py={10}
          // border="1px solid red"
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Menu bg="#f0f0f0">
                <MenuButton
                  as={Button}
                  bg="#f0f0f0"
                  border="none"
                  borderRadius="none"
                  rightIcon={<ChevronDownIcon />}
                >
                  <Icon ml="-15px" icon={faGlobe} /> IN/EN
                </MenuButton>
                <MenuList>
                  <MenuItem>India/English</MenuItem>
                  <MenuItem>Afghanistan/English</MenuItem>
                  <MenuItem>Australia/English</MenuItem>
                  <MenuItem>Bhutan/english</MenuItem>
                  <MenuItem>Maldives/English</MenuItem>
                </MenuList>
              </Menu>

              <Link href={"#"}>Site Map</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Account</ListHeader>
              <Link href={"#"}>My Account</Link>
              <Link href={"#"}>Order Status</Link>
              <Link href={"#"}>My Products</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Support Home</Link>
              <Link href={"#"}>Contact Support</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Connect with Us</ListHeader>
              <Link href={"#"}>Community</Link>
              <Link href={"#"}>Contact US</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        // border="1px solid red"
        bg="#f0f0f0"
        fontSize={"14px"}
        lineHeight={"25px"}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"8xl"}
          width="100%"
          py={10}
          // border="1px solid red"
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Our Offerings</ListHeader>
              <Link href={"#"}>APEX</Link>
              <Link href={"#"}>Products</Link>
              <Link href={"#"}>Solutions</Link>
              <Link href={"#"}>Services</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Our Company</ListHeader>
              <Link href={"#"}>Who We Are</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Dell Technologies Capital</Link>
              <Link href={"#"}>Investors</Link>
              <Link href={"#"}>Newsroom</Link>
              <Link href={"#"}>Perspective</Link>
              <Link href={"#"}>Recycling</Link>
              <Link href={"#"}>ESG & Impact</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Our Partners</ListHeader>
              <Link href={"#"}>Find a Partner</Link>
              <Link href={"#"}>OEM Solution</Link>
              <Link href={"#"}>Partner Program</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Resources</ListHeader>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Events</Link>
              <Link href={"#"}>Dell Learning Centre</Link>
              <Link href={"#"}>Glossary</Link>
              <Link href={"#"}>Privacy Centre</Link>
              <Link href={"#"}>Resources Library</Link>
              <Link href={"#"}>Trail Software Downloads</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box   width="93%" m="auto">
          <Box
            
            width={"25%"}
            display="flex"
            justifyContent={"space-between"}
          >
            <Link fontWeight={'bold'}>Dellco.com</Link>
            <Link fontWeight={'bold'}>Dellco Technologies</Link>
            <Link fontWeight={'bold'}>Premier</Link>
          </Box>
          <Box  
            width={"55%"}
            py="30px"
            display="flex"
            justifyContent={"space-between"}>
            <Link>Copyright © 2023 Dell Inc. </Link>
            <Link>Terms of Sale</Link>
            <Link>Privacy Statement</Link>
            <Link> Legal & Regulatory</Link>
            <Link>Accessibilty</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterPart;
