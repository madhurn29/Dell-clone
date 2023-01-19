import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";
function ProductSpecs({
  id,
  title,
  imageUrl1,
  orderCode,
  rating,
  processor,
  os,
  graphics,
  memory,
  storage,
  display,
  promoCode,
  strikethrough,
  price,
  save,
  percentageSav,
  emiStatus,
  emi,
  month,
}) {
  const firstColWidth = "23%";
  const secondColWidth = "75%";
  const firstColFontSize = "14px";
  const secondColFontSize = "16px";
  const lineHeight = "35px";
  const titleColor = "#007db8";

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      border="1px solid #d8d2dd"
      py="40px"
      mb="20px"
    >
      <Box
        className="ImageBox"
        width={"33%"}
        border={"1px solid re"}
        display="flex"
        alignItems={"center"}
      >
        <Image src={imageUrl1} />
      </Box>
      <Box className="SpecsBox" width={"33%"} border={"1px solid re"}>
        <Box borderBottom={"1px solid grey"}>
          <Text
            lineHeight={lineHeight}
            color={titleColor}
            fontWeight={500}
            fontSize={"20px"}
          >
            <NavLink
              to={`/InspironList/${id}`}
              style={{ textDecoration: "underline" }}
            >
              {title}
            </NavLink>
          </Text>
          <Text lineHeight={"25px"} fontSize={"14px"}>
            {orderCode}
          </Text>
          <Text lineHeight={"25px"} fontSize={"14px"}>
            {" "}
            Rating {rating}
          </Text>
          <Text lineHeight={lineHeight} fontWeight={500} fontSize={"16px"}>
            Specs
          </Text>
        </Box>
        <Box className="specsBox">
          <Box className="row" display={"flex"} lineHeight={lineHeight}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}> Processor</Text>
            </Box>
            <Box lineHeight={"25px"} width={secondColWidth}>
              <Text fontSize={secondColFontSize}>{processor}</Text>
            </Box>
          </Box>

          <Box className="row" display={"flex"} lineHeight={lineHeight}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}>OS</Text>
            </Box>
            <Box width={secondColWidth}>
              <Text fontSize={secondColFontSize}> {os}</Text>
            </Box>
          </Box>

          <Box className="row" display={"flex"} lineHeight={lineHeight}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}>Graphics</Text>
            </Box>
            <Box width={secondColWidth}>
              <Text lineHeight={"25px"} fontSize={secondColFontSize}>
                {" "}
                {graphics}
              </Text>
            </Box>
          </Box>

          <Box className="row" display={"flex"} lineHeight={lineHeight}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}>Memory</Text>
            </Box>
            <Box width={secondColWidth}>
              <Text fontSize={secondColFontSize}> {memory}</Text>
            </Box>
          </Box>

          <Box className="row" display={"flex"} lineHeight={lineHeight}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}>Storage</Text>
            </Box>
            <Box width={secondColWidth}>
              <Text fontSize={secondColFontSize}> {storage}</Text>
            </Box>
          </Box>

          <Box className="row" display={"flex"}>
            <Box width={firstColWidth}>
              <Text fontSize={firstColFontSize}>Display </Text>
            </Box>
            <Box width={secondColWidth}>
              <Text fontSize={secondColFontSize}> {display}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="PriceBox" width={"30%"} border={"1px solid re"}>
        <Box>
          <Text
            bg="#f5f6f7"
            border="1px solid gre"
            fontWeight={500}
            w="fit-content"
            px="8px"
            lineHeight={"40px"}
            fontSize={"14px"}
          >
            * {promoCode}{" "}
          </Text>
          <Box display={"flex"}>
            <Text fontSize={"14px"}> Online Price : </Text>
            <Text textDecoration={"line-through"}>{strikethrough}</Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            border="1px solid re"
            width={"75%"}
            justifyContent={"space-between"}
          >
            <Text fontSize={"21px"} fontWeight={700}>
              {price}
            </Text>

            <Text color={"green"} fontSize={"14px"}>
              save:
              {save} {percentageSav}
            </Text>
          </Box>
          <Text fontSize={"14px"}>Price inclusive of GST. Free Delivery</Text>
          <Text lineHeight={"40px"} fontSize={"14px"}>
            Usualy deliverd in 2-4 days
          </Text>
          <Text fontSize={"16px"} fontWeight={600}>
            Special Offers
          </Text>
          <Text lineHeight={"40px"} fontSize={"16px"} fontWeight={600}>
            Financing
          </Text>
          {emi === "No cost EMI" ? (
            <Text fontSize={"14px"}>
              {emi} {emiStatus}
            </Text>
          ) : (
            <Text fontSize={"14px"}>
              {emiStatus} {emi} {month}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductSpecs;
