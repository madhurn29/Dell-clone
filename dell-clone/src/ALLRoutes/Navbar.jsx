import React from "react";
import NavbarTopPart from "../Components/NavbarComponents/NavbarTopPart";
import NavbarBottomPart from "../Components/NavbarComponents/NavbarBottomPart";
import { Box } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box border="" wodth="100%" height="auto" boxShadow="0px 2px 1px 0px rgba(199,199,199,1);" mt="5px">
      <NavbarTopPart />
      <NavbarBottomPart />
    </Box>
  );
}

export default Navbar;
