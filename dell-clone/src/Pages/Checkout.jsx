import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  useToast,Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const init = {
  card: "",
  date: "",
  year: "",
  name: "",
  cvv: "",
};
function Checkout() {
  const { totalPrice } = useContext(AuthContext);
  const [form, setForm] = useState(init);
  const { card, date, year, name, cvv } = form;
  const toast = useToast();
  const navigate = useNavigate();

  const callToast = () => {
    toast({
      title: "Please Enter all the Details",
      position: "top",
      isClosable: true,
    });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };
console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    for (let x in form) {
      if (form[x] === "") {
        flag = false;
      }
    }

    if (flag) {
      navigate("/thankyou");
    } else {
      callToast();
    }
  };

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
          Check Out
        </Text>
      </Box>
      <Box
        border={"1px solid blu"}
        display={"flex"}
        justifyContent="space-between"
        width={"80%"}
        m="25px auto"
      >
        <Box width={"60%"} border="1px solid re">
          <Text mb="15px">
            Extra 10% Cashback up to ₹5,000 on Citi Credit Card EMI, Non EMI &
            Debit Card Non EMI transactions.
          </Text>
          <Text fontSize={"30px"}>Card Payment</Text>
          <Text my="25px">
            Cashback will be processed to the customer's card within 90 days
            from the offer end date. T&C apply
          </Text>

          <Box className="FormBox" border={"1px solid re"}>
            <FormControl isRequired>
              <FormLabel>Card Number</FormLabel>
              <Input
                placeholder="1234 1234 1234 1234"
                type={"number"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="card"
                width="70%"
                value={card}
                  onChange={(e) => handleChange(e)}
              />
              <FormLabel>Expiration Date</FormLabel>
              <Box display={"flex"}>
                <Select
                  placeholder="Month"
                  border={"1px solid black"}
                  borderRadius="none"
                  width={"30%"}
                  name="date"
                  value={date}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="3"> 4</option>
                  <option value="3"> 5</option>
                  <option value="3"> 6</option>
                  <option value="3"> 7</option>
                  <option value="3"> 8</option>
                  <option value="3"> 9</option>
                  <option value="3"> 10</option>
                  <option value="3"> 11</option>
                  <option value="3"> 12</option>
                </Select>
                <Select
                  placeholder="Year"
                  border={"1px solid black"}
                  borderRadius="none"
                  width={"30%"}
                  name="year"
                  value={year}
                  onChange={(e)=>{handleChange(e)}}
                >
                  <option value="2023"> 2023</option>
                  <option value="2024"> 2024</option>
                  <option value="2025"> 2025</option>
                  <option value="2026"> 2026</option>
                  <option value="2027"> 2027</option>
                  <option value="2028"> 2028</option>
                  <option value="2029"> 2029</option>
                  <option value="2030"> 2030</option>
                </Select>
              </Box>
              <FormLabel mt="5px">Name On Card</FormLabel>
              <Input
                placeholder="Mr. John Smith"
                type={"text"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="name"
                width={"60%"}
                value={name}
                  onChange={(e) => handleChange(e)}
              />
              <FormLabel>CVV</FormLabel>
              <Input
                placeholder="123"
                type={"number"}
                width="49%"
                border={"1px solid black"}
                borderRadius="none"
                mb="20px"
                name="cvv"
                value={cvv}
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
              Chat with an agent or Call 1800-425-4002 for additional help.
            </Text>
            
          </Box>
          <Box border="1px solid black" p="15px">
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

export default Checkout;
