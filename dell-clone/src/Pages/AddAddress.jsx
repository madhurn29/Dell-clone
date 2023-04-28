import React from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  FormControl,
  FormLabel,
  useToast,Image
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
const init = {
  firstname: "",
  lastname: "",
  pincode: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  phone: "",
};
function AddAddress() {
  const [form, setForm] = useState(init);
  const toast = useToast();
  const navigate = useNavigate();
  const { totalPrice } = useContext(AuthContext);
  const callToast = () => {
    toast({
      title: "Please Enter all the Details",
      position: "top",
      isClosable: true,
    });
  };

  const {
    firstname,
    lastname,
    pincode,
    address1,
    address2,
    city,
    state,
    phone,
  } = form;

  
  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    for (let x in form) {
      if (form[x] === "") {
        flag = false;
      }
    }

    if (flag) {
      navigate("/checkout");
    } else {
      callToast();
    }
  };
  console.log(form);
  return (
    <Box border="1px solid re" pb="50px">
      <Box
        className="heading"
        border={"1px solid blak"}
        m="auto"
        mt="40px"
        width={"80%"}
      >
        <Text textAlign={"left"} fontSize={"30px"}>
          Shipping Address
        </Text>
      </Box>
      <Box
        border={"1px solid blu"}
        display={"flex"}
        justifyContent="space-between"
        width={"80%"}
        m="25px auto"
      >
        <Box width={"50%"} border="1px solid re">
          <Box className="FormBox" border={"1px solid re"}>
            <FormControl isRequired>
              <Box display={"flex"} justifyContent={"space-between"} mb="20px">
                <Box border={"1px solid re"} width="49%">
                  <FormLabel>First Name</FormLabel>
                  <Input
                    placeholder="Name"
                    type={"text"}
                    width="100%"
                    border={"1px solid black"}
                    borderRadius="none"
                    name="firstname"
                    isRequired={true}
                    value={firstname}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>

                <Box border={"1px solid re"} width="49%">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    placeholder="Lastname"
                    type="text"
                    width="100%"
                    border={"1px solid black"}
                    borderRadius="none"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Box>
              <FormLabel>Pin Code</FormLabel>
              <Input
                placeholder="Pin Code"
                type={"number"}
                width="49%"
                border={"1px solid black"}
                borderRadius="none"
                mb="20px"
                name="pincode"
                value={pincode}
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Address Line 1</FormLabel>
              <Input
                placeholder="Address Line 1"
                type={"text"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="address1"
                value={address1}
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Address Line 2</FormLabel>
              <Input
                placeholder="Address Line 2"
                type={"text"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="address2"
                value={address2}
                onChange={(e) => handleChange(e)}
              />
              <Box display={"flex"} justifyContent={"space-between"} mb="20px">
                <Box border={"1px solid re"} width="49%">
                  <FormLabel>City</FormLabel>
                  <Input
                    placeholder="City"
                    type={"text"}
                    width="100%"
                    border={"1px solid black"}
                    borderRadius="none"
                    name="city"
                    value={city}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>

                <Box border={"1px solid re"} width="49%">
                  <FormLabel>State</FormLabel>
                  <Input
                    placeholder="State"
                    type="text"
                    width="100%"
                    border={"1px solid black"}
                    borderRadius="none"
                    name="state"
                    value={state}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Box>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Phone Number"
                type={"number"}
                width="49%"
                border={"1px solid black"}
                borderRadius="none"
                mb="20px"
                name="phone"
                value={phone}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          border={"1px solid re"}
          position="sticky"
          top={100}
          className="Price section"
          ml="5"
          width={"30%"}
          pt="15px"
        >
          <Box className="couponCode">
            <Text fontSize={"16px"} my="5px" mb="15px">
              Coupons
            </Text>
            <InputGroup size="md">
              <Input
                // pr="5px"
                type="text"
                placeholder="Enter Coupon"
                _placeholder={{ color: "grey", paddingLeft: "1px" }}
                borderRadius={"none"}
                border="1px solid grey"
              />
              <InputRightElement width="">
                <Button
                  variant={"outline"}
                  h="1.75rem"
                  size="sm"
                  onClick={""}
                  borderRadius={"none"}
                  color="#007db8"
                  mr="2px"
                >
                  Apply Coupon
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box border="1px solid black">
            <Box borderBottom={"1px solid black"} p="10px">
              <Text>Estimate Shipping and Tax</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>Rs. {totalPrice}</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Shipping (Express shippinhg)</Text>
              <Text>Rs. 0</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Order Total</Text>
              <Text fontWeight={500}>Rs. {totalPrice}</Text>
            </Box>
            <Box mt="15px" pb={"30px"}>
              <Button
                borderRadius={"none"}
                width="100%"
                bg="#5e9f10"
                color="white"
                _hover={{
                  color: "#5e9f10",
                  backgroundColor: "white",
                  border: "1px solid #5e9f10",
                }}
                onClick={(e) => handleSubmit(e)}
              >
                {" "}
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
          <Box>
            <Image src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddAddress;
