import SingleProductTopPart from "./SingleProductTopPart";
import { useState } from "react";
import { Box, Text, Image, chakra, Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Essentials from "./Essentials";
import SkeletonSingleProductPage from "./SkeletonSingleProductPage";
function SingleProductPage({ route, routeName }) {
  const param = useParams();
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Icon = chakra(FontAwesomeIcon);
  const toast = useToast();
  const callToast = (text) => {
    toast({
      title: text,
      position: "top-right",
      isClosable: true,
    });
  };

  const SubRouteFun = (routeName) => {
    if (routeName === "Inspiron") {
      return "/InspironList";
    } else if (routeName === "Vostro") {
      return "/VostroList";
    }
  };

  const { id } = param;
  console.log(id);
  const getData = (id) => {
    setIsLoading(true);
    axios
      .get(`https://dell-render.onrender.com/${route}/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setProductData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "fromerr");
      })
      .finally(function () {
        // always executed
      });
  };
  useEffect(() => {
    getData(id);
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [id]);

  const handleAddCart = (obj) => {
    let newobj = { ...obj, quantity: 1 };
    axios
      .post("https://dell-render.onrender.com/cart", newobj)
      .then(function (response) {
        console.log(response);
        callToast("Added to cart");
      })
      .catch(function (error) {
        console.log(error);
        callToast("Already added to cart");
      });
    console.log("from add cart", newobj);
  };

  return (
    <Box>
      <SingleProductTopPart
        subRoute={SubRouteFun(routeName)}
        routeName={routeName}
        title={productData?.title}
      />

      {isLoading ? (
        <SkeletonSingleProductPage />
      ) : (
        <Box
          border={"1px solid re"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box
            className="ImageSide"
            width={"48%"}
            border={"1px solid blu"}
            display={"flex"}
            flexDirection={"column"}
            //   justifyContent={"end"}
            alignItems={"end"}
          >
            <Box mr="25px">
              <Text fontSize={"30px"}>{productData?.title}</Text>
            </Box>
            <Box
              mt="50px"
              display={"flex"}
              justifyContent={"center"}
              width={"80%"}
              border="1px solid re"
            >
              <Image width={"80%"} src={productData?.imageUrl1} />
            </Box>
          </Box>

          <Box className="ContentSide" width={"48%"} border={"1px solid gree"}>
            <Box border={"1px solid re"} width={"75%"}>
              <Box fontSize={"28px"}>
                {" "}
                <Icon icon={faShareNodes} fontSize="22px" /> Share
              </Box>
              <Box>
                <Text
                  color={"#4169e1"}
                  mt="15px"
                  fontSize="14px"
                  fontWeight={500}
                >
                  ₹2500 discount on Credit Card, NetBanking,UPI | Dell Essential
                  Bag Included Buy with MS3220 mouse & Get ₹300 Off
                </Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} mt="20px">
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/processor-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    {productData?.processor}
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/laptop-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    {productData?.os}
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/videocard-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    {productData?.graphics}
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/memory-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    {productData?.memory}
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/harddrive-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    {productData?.storage}
                  </Text>
                </Box>
                <Box display={"flex"}>
                  <Image
                    width={"20px"}
                    mr="10px"
                    src={
                      "https://www.dellstore.com/pub/media/laptop/fallbackcolor-blk.svg"
                    }
                  />
                  <Text fontSize="14px" lineHeight={"30px"}>
                    Platinum Silver
                  </Text>
                </Box>
              </Box>

              <Box className="PriceSection" mt="20px">
                <Box display={"flex"}>
                  <Text mr="5px">Online Price</Text>
                  <Text textDecoration={"line-through"}>
                    {productData?.strikethrough}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"20px"} mt="5px" fontWeight={500}>
                    {productData?.price}
                  </Text>
                  <Text fontSize={"12px"} mt="5px">
                    Price Inclusive GST & Delivery
                  </Text>
                  <Text fontSize={"14px"} mt="10px">
                    Get it as low as after UPI/Netbanking Offer{" "}
                  </Text>
                  <Text color={"#006bbd"} mt="10px" fontSize="14px">
                    Very Special Offers
                  </Text>
                  <Button
                    onClick={() => {
                      handleAddCart(productData);
                    }}
                    bg={"#408001"}
                    color={"#fff"}
                    mt="15px"
                    px="25px"
                    borderRadius={"2px"}
                    _hover={{
                      background: "white",
                      color: "green",
                      border: "1px solid green",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      <Box>
        <Essentials />
      </Box>
    </Box>
  );
}

export default SingleProductPage;
