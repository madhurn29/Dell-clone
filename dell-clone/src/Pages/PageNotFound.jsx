import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Box display={"flex"} justifyContent="center">
      <Image
        src="https://img.freepik.com/free-vector/flat-404-error-template_23-2147749587.jpg?w=740&t=st=1674386439~exp=1674387039~hmac=6024f2871fc7fe44577bd6dd35823e84057cb312c24ce0cfe603748a5bf92a03"
        onClick={() => navigate("/")}
      ></Image>
    </Box>
  );
}

export default PageNotFound;
