import { Box, Image, Text, Link } from "@chakra-ui/react";
function BannerComponents({
  imageUrl,
  head,
  tagLine,
  content,
  link1,
  link2,
  contentBoxOrder,
  imageBoxOrder,
  flexDirection,
  contentBoxWidth,
  imageBoxWidth,
}) {
  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
    //   border="1px solid blue"
      justifyContent={"center"}
    >
      <Box
        className="ImageBox"
        // border="1px solid red"
        width={imageBoxWidth || "55%"}
        margin="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        order={imageBoxOrder}
      >
        <Box width="80%">
          <Image width="100%" ml="40px" src={imageUrl} />
        </Box>
      </Box>
      <Box
        className="ContentBox"
        width={contentBoxWidth || "45%"}
        margin="auto"
        // border="1px solid red"
        display="flex"
        justifyContent="center"
        alignItems="center"
        order={contentBoxOrder}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="80%"
          //   border="1px solid red"
        >
          <Text lineHeight="55px" fontSize="20px">
            {head}
          </Text>
          <Text lineHeight="55px" fontSize="30px">
            {tagLine}
          </Text>
          <Text fontSize="20px" textAlign="center">
            {content}
          </Text>
          <Text lineHeight="20px" mt="10px" fontSize="12px">
            *T&C apply
          </Text>
          <Box
            // border="1px solid red"
            width="40%"
            display="flex"
            justifyContent="space-between"
          >
            <Link fontSize="20px" color="blue" textDecoration="none">
              {link1}
            </Link>
            |
            <Link fontSize="20px" color="blue" textDecoration="none">
              {link2}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BannerComponents;
