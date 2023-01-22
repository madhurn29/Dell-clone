import React from "react";
import { Box, Image, Text, Button, Grid, GridItem } from "@chakra-ui/react";
function Essentials() {
  let data = [
    {
      imageURl:
        "https://www.dellstore.com/pub/media/catalog/product/cache/5f704e6aa33c3957984e2ef368cc77b5/5/7/570-abdt.png",
      title: "Dell Laser Wired Mouse MS3220 - Titan Gray",
      rating: "4.2",
      price: "₹ 1,299",
    },
    {
      imageURl:
        "https://www.dellstore.com/pub/media/catalog/product/cache/5f704e6aa33c3957984e2ef368cc77b5/5/2/520-aaul5.jpg",
      title: "Dell Pro Wired Headset - WH3022 - Retail Sleeve",
      rating: "4.4",
      price: "₹ 6,699",
    },
    {
      imageURl:
        "https://www.dellstore.com/pub/media/catalog/product/cache/5f704e6aa33c3957984e2ef368cc77b5/5/8/580-ajnj1.jpg",
      title:
        "Dell Premier Multi-Device Wireless Keyboard and Mouse International English - KM7321W",
      rating: "4.2",
      price: "₹ 7,299",
    },
    {
      imageURl:
        "https://www.dellstore.com/pub/media/catalog/product/cache/5f704e6aa33c3957984e2ef368cc77b5/7/2/722-bbbc.jpg",
      title: "Dell UltraSharp Webcam - WB7022",
      rating: "4.1",
      price: "₹ 4,199",
    },
    {
      imageURl:
        "https://www.dellstore.com/pub/media/catalog/product/cache/5f704e6aa33c3957984e2ef368cc77b5/5/7/570-abei.png",
      title: "Dell Laser Wired Mouse MS3220 - Black",
      rating: "4.1",
      price: "₹ 1,399",
    },
  ];
  return (
    <Box borderTop="1px solid grey" my="25px">
      <Box width={"75%"} m="25px auto">
        <Text fontSize={"30px"}>Essentials</Text>
      </Box>
      <Box border="1px solid blac" width={"75%"} m="auto" display="flex">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} width="100%">
          {data.map((item) => {
            return (
              <GridItem pb="5px" border={"1px solid re"} fontSize={"14px"} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Image src={item.imageURl} />
                </Box>
                <Box h="120px" p="8px">
                  <Text color={"#007db8"}>{item.title}</Text>
                  <Text>Rating: {item.rating}</Text>
                  <Text fontWeight={500}>{item.price}</Text>
                </Box>
                <Button 
                  colorScheme={"green"}
                  borderRadius="none"
                  width={"100%"}
                >
                  Add to Cart
                </Button>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Essentials;
