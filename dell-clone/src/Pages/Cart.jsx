import React from "react";
import {
  Box,
  Text,
  Image,
  Select,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function Cart() {
  const { TotalPriceFun } = useContext(AuthContext);
  const [data, setData] = useState([]);
  //   const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const [totalCartPrice, setTotalPrice] = useState(0);
  const convertNum = (x) => {
    let y = x.split(" ")[1];
    let z = y.split(",").join("");
    return +z;
  };
  let totalPrice = 0;
  data.forEach((item) => {
    totalPrice += convertNum(item.price) * Number(item.quantity);
  });

  totalPrice = totalPrice.toFixed(2);
  console.log(totalPrice);
  TotalPriceFun(totalPrice);

  const getData = () => {
    axios("http://localhost:8080/cart")
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    setTotalPrice(totalPrice);
  }, [totalPrice]);

  const handleQuantity = (val, id) => {
    if (!val) {
      val = 1;
    }
    axios
      .patch(`http://localhost:8080/cart/${id}`, { quantity: val })
      .then((res) => {
        console.log(res);
        getData();
      });

    console.log("quanty", +val, "id", id);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
      console.log("deleted");
      getData();
    });
  };
  return (
    <Box border="1px solid re" pb="50px">
      <Box
        className="heading"
        border={"1px solid blac"}
        m="auto"
        mt="40px"
        width={"80%"}
      >
        <Text textAlign={"left"} fontSize={"30px"}>
          Shooping Cart
        </Text>
      </Box>
      <Box
        border={"1px solid blu"}
        display={"flex"}
        justifyContent="space-between"
        width={"80%"}
        m="auto"
      >
        <Box className="cartItems" width={"70%"} border="1px solid re">
          <Box
            fontSize={"14px"}
            className="topBox"
            display={"flex"}
            borderBottom="1px solid grey"
            p={"20px"}
          >
            <Box width={"60%"}>
              <Text ml="40px">Item</Text>
            </Box>
            <Box width={"20%"}>
              <Text ml="10px">Qty</Text>
            </Box>
            <Box width={"20%"}>
              <Text ml="30px">Price</Text>
            </Box>
          </Box>
          <Box className="middleBox" display={"flex"} flexDirection="column">
            {data?.map((item) => {
              return (
                <Box
                  key={item?.id}
                  display={"flex"}
                  borderBottom="1px solid grey"
                >
                  <Box
                    width={"60%"}
                    mb="15px"
                    pb="15px"
                    borderBottom="1px solid gre"
                    display={"flex"}
                  >
                    <Box
                      border={"1px solid blu"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width="30%"
                    >
                      <Image width={"80%"} src={item.imageUrl1} />{" "}
                    </Box>
                    <Box
                      width={"70%"}
                      fontSize={"12px"}
                      lineHeight="25px"
                      mt="15px"
                    >
                      <Text fontWeight={500} fontSize={"14px"}>
                        {item.title}
                      </Text>
                      <Text>{item.orderCode}</Text>
                      <Text fontWeight={500}>Product : </Text>
                      <Text>{item.title} </Text>
                      <Text fontWeight={500}>Backpack : </Text>
                      <Text>Dell Essential Backpack</Text>
                    </Box>
                  </Box>
                  <Box width={"20%"} mt="20px">
                    <Select
                      placeholder={item?.quantity}
                      size="sm"
                      width={"70px"}
                      onChange={(e) => handleQuantity(e.target.value, item.id)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </Select>
                  </Box>
                  <Box
                    border="1px solid re"
                    pb="15px"
                    width={"20%"}
                    mt="20px"
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"18px"} fontWeight={500}>
                      {item.price}
                    </Text>
                    <Button
                      ml="10px"
                      variant={"link"}
                      colorScheme="blue"
                      width="70px"
                      onClick={() => handleDelete(item.id)}
                    >
                      {" "}
                      Remove Item{" "}
                    </Button>
                  </Box>
                </Box>
              );
            })}
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
            <Box borderBottom={"1px solid blac"} p="10px">
              <Text>Estimate Shipping and Tax</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>Rs. {totalCartPrice}</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Shipping (Express shippinhg)</Text>
              <Text>Rs. 0</Text>
            </Box>
            <Box p="10px" display={"flex"} justifyContent={"space-between"}>
              <Text>Order Total</Text>
              <Text fontWeight={500}>Rs. {totalCartPrice}</Text>
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
                onClick={() => navigate("/address")}
              >
                {" "}
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
