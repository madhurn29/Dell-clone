import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function TopPartPrdouctList() {
  return (
    <Box
      border={"1px solid blu"}
      display="flex"
      justifyContent={"space-around"}
      mt="15px"
    >
      <Box border={"1px solid re"} width={"50%"} display="flex">
        <Breadcrumb
          fontSize={"12px"}
          border={"1px solid blu"}
          width="90%"
          mt="20px"
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Laptops</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Laptopss & 2-in-1 PCs</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box
        border={"1px solid re"}
        width={"33%"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Image src="https://i.dell.com/is/svg/brand-assets/3rd-party-logos/microsoft/windows-11/windows-11-mda-banner-en-us.svg" />
        <Text fontSize={"12px"}>Intel® Core™ Processors</Text>
        <Image src="https://i.dell.com/sites/csimages/DellMicroContent_Images/all/family-core-i5i7i3-60h.png" />
      </Box>
    </Box>
  );
}

export default TopPartPrdouctList;
