import { useContext,useState,useEffect } from "react";
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
  const {isAuth,userName,setLogout} = useContext(AuthContext);
  const [signInBtnText,SetSignInText]=useState("Sign In")
  
  // useEffect(()=>{
  //   SetSignInText(userName)
  // },[])
  console.log("fromnavbar",isAuth,userName);

  const handleSigninButton=()=>{
    if(isAuth){
      SetSignInText("Log Out")
      setLogout()

    }
    else{
      navigate("/signin");
    }
  }

  return (
    <>
      <Box
        className="TopBar"
        // border="1px solid black"
        display="flex"
        justifyContent="space-between"
        // bg="tomato"
      >
        <Box justifyContent="start" alignItems="center" display="flex">
          <Box className="logoandSearchBox" display="flex" alignItems="center">
            <Box className="LogoBox">
              <Link href="/">
                <Image
                  ml="30px"
                  objectFit="cover"
                  width="180px"
                  src={dell_logo}
                  alt="Dell Log0"
                />
              </Link>
            </Box>

            <Box className="Search box">
              <InputGroup width="550px" ml="90px">
                <Input
                  placeholder="Search Dell"
                  height="35px"
                  borderRadius="none"
                  border="1px solid black"
                  onChange={(e) => setSearchFun(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <SearchIcon />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Box className="siginMenuBox" mr="15px">
          <Box display="flex" alignItems="center" height="100%">
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
              <MenuList width={"50%"}>
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
                  {isAuth ? "Manage Account" : "Create Account" }
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
              <MenuList>
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
              <MenuList>
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
