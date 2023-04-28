import { useContext, useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  faUser,
  faHeadset,
  faGlobe,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dell_logo from "./dell_logo.png";
import {
  Box,
  chakra,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  Button,
  MenuList,
  MenuButton,
  MenuItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
function NavbarTopPart() {
  const navigate = useNavigate();
  const Icon = chakra(FontAwesomeIcon);
  const { setSearchFun } = useContext(SearchContext);
  const { isAuth, userName, setLogout } = useContext(AuthContext);
  const [signInBtnText, SetSignInText] = useState("Sign In");



  const handleSigninButton = () => {
    if (isAuth) {
      SetSignInText("Log Out");
      setLogout();
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Box
        width={"100%"}
        className="TopBar"
        border="1px solid re"
        display="flex"
        justifyContent="space-between"
        // bg="tomato"
      >
        <Box
          className="logoBoxAndSearchBox"
          display="flex"
          alignItems="center"
          width={"70%"}
          border={"1px solid blac"}
        >
          <Box className="LogoBox" width={"25%"} border={"1px solid re"}>
            <Link href="/">
              <Image
                ml="30px"
                // objectFit="cover"
                width="70%"
                src={dell_logo}
                alt="Dell Log0"
              />
            </Link>
          </Box>

          <Box className="Search box" width={"70%"} border={"1px solid re"}>
            <InputGroup width="80%">
              <Input
                placeholder="Search Dell"
                height="35px"
                borderRadius="none"
                border="1px solid black"
                onChange={(e) => setSearchFun(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Box
          className="signinMenuBox"
          mr="15px"
          width={"30%"}
          border={"1px solid re"}
          bg="pin"
          display={"flex"}
          justifyContent="right"
        >
          <Box display="flex" alignItems="center" height="100%" zIndex={9}>
            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                border="none"
                borderRadius="none"
                rightIcon={<ChevronDownIcon />}
              >
                <Icon icon={faUser} /> {isAuth ? userName : "SignIn"}
              </MenuButton>
              <MenuList width={"50%"} zIndex={9}>
                <Text as="h5" size="xs" ml="10px">
                  Welcome To Dell
                </Text>
                <Button
                  width="90%"
                  ml="9px"
                  colorScheme="blue"
                  borderRadius="none"
                  mt="15px"
                  pt="4px"
                  pb="4px"
                  height="25px"
                  onClick={handleSigninButton}
                >
                  {isAuth ? "Log Out" : "Sign In"}
                </Button>
                <Button
                  width="90%"
                  ml="9px"
                  variant={"outline"}
                  colorScheme="blue"
                  borderRadius="none"
                  mt="15px"
                  pt="4px"
                  pb="4px"
                  height="25px"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  {isAuth ? "Manage Account" : "Create Account"}
                </Button>
                <Button
                  width="90%"
                  ml="9px"
                  variant={"outline"}
                  colorScheme="blue"
                  borderRadius="none"
                  mt="15px"
                  pt="4px"
                  pb="4px"
                  height="25px"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  Admin Page
                </Button>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                border="none"
                borderRadius="none"
                p="5px"
              >
                <Icon icon={faHeadset} /> Contact Us
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                border="none"
                borderRadius="none"
                rightIcon={<ChevronDownIcon />}
              >
                <Icon icon={faGlobe} /> IN/EN
              </MenuButton>
              <MenuList zIndex={9}>
                <MenuItem>India/English</MenuItem>
                <MenuItem>Afghanistan/English</MenuItem>
                <MenuItem>Australia/English</MenuItem>
                <MenuItem>Bhutan/english</MenuItem>
                <MenuItem>Maldives/English</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                border="none"
                borderRadius="none"
                rightIcon={<ChevronDownIcon />}
              >
                <Icon icon={faCartShopping} /> Cart
              </MenuButton>
              <MenuList zIndex={9}>
                <MenuItem>
                  <RouterLink to="/cart">Go to Cart</RouterLink>
                </MenuItem>
                {/* <MenuItem>Empty Cart</MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NavbarTopPart;
