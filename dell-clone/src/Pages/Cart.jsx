import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import CartItem from "../Components/Cart/CartItem";
import CartItemSkeleton from "../Components/Cart/CartItemSkeleton";

function Cart() {
  const { TotalPriceFun } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [up, setUp] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  TotalPriceFun(totalPrice);

  const getData = () => {
    setIsLoading(true);
    axios(`${process.env.REACT_APP_SERVER_URL}/cart`)
      .then((result) => {
        setIsLoading(false);
       
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    setTotalPrice(totalPrice);
  }, [totalPrice, up]);

  const handleQuantity = (val, id) => {
    if (!val) {
      val = 1;
    }
    axios
      .patch(`${process.env.REACT_APP_SERVER_URL}/cart/${id}`, {
        quantity: val,
      })
      .then((res) => {
     
        setUp((prev) => prev + 1);
        getData();
      });

    console.log("quantity", +val, "id", id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/cart/${id}`)
      .then((res) => {
     
        setUp((prev) => prev + 1);
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
          Shopping Cart
        </Text>
      </Box>
      <Box
        border={"1px solid blu"}
        display={"flex"}
        justifyContent="space-between"
        width={"80%"}
        m="auto"
      >
        {isLoading ? (
          <CartItemSkeleton />
        ) : data.length === 0 ? (
          <Box
            border={"1px solid gre"}
            width={"70%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box textAlign={"center"}>
              <Image src="https://tmbelectronics.in/common/images/emptycart.png" />
              <Text fontSize={"20px"}>Opps, Your Cart is Empty</Text>
              <Button
                mt="15px"
                colorScheme={"blue"}
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
            </Box>
          </Box>
        ) : (
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
            <Box
              className="middleBox"
              display={"flex"}
              flexDirection="column"
              border={"1px solid re"}
            >
              {data?.map((item) => {
                return (
                  <CartItem
                    {...item}
                    handleDelete={handleDelete}
                    handleQuantity={handleQuantity}
                  />
                );
              })}
            </Box>
          </Box>
        )}
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
              <Text>Shipping (Express shipping)</Text>
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
                disabled={data.length === 0}
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
