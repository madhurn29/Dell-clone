import { Box, Text, Image, Select, Button } from "@chakra-ui/react";
function CartItem({id,imageUrl1,title,orderCode,quantity,price,handleQuantity,handleDelete}) {
  return (
    <Box
      key={id}
      display={"flex"}
      bg="pin"
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
          <Image width={"80%"} src={imageUrl1} />{" "}
        </Box>
        <Box width={"70%"} fontSize={"12px"} lineHeight="25px" mt="15px">
          <Text fontWeight={500} fontSize={"14px"}>
            {title}
          </Text>
          <Text>{orderCode}</Text>
          <Text fontWeight={500}>Product : </Text>
          <Text>{title} </Text>
          <Text fontWeight={500}>Backpack : </Text>
          <Text>Dell Essential Backpack</Text>
        </Box>
      </Box>
      <Box width={"20%"} mt="20px">
        <Select
          placeholder={quantity}
          size="sm"
          width={"70px"}
          onChange={(e) => handleQuantity(e.target.value, id)}
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
          {price}
        </Text>
        <Button
          ml="10px"
          variant={"link"}
          colorScheme="blue"
          width="70px"
          onClick={() => handleDelete(id)}
        >
          {" "}
          Remove Item{" "}
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
