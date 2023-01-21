import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function RightLaptop() {
  const navigate = useNavigate();

  return (
    <Box border={"1px solid re"} py="40px" bg="#f3f3f3">
      <Box>
        <Text textAlign={"center"} fontSize={"48px"}>
          Which laptop is right for you?
        </Text>
      </Box>
      <Box width={"90%"} margin="auto" mt="50px">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="90%" border={"1px solid blu"}>
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                width={"80%"}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/latam/dv7620nt-cnb-05000ff090-nonfpr-bk.png?$S7-png$&wid=800&hei=550&qlt=100,0&resMode=sharp2"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              border={"1px solid re"}
              width={"75%"}
              m="auto"
            >
              <Text fontSize={"16px"} fontWeight={"bold"} lineHeight={"35px"}>
              Small Business Productivity
              </Text>
              <Text fontSize={"16px"} lineHeight={"35px"} fontWeight={"500"}>
              Starting at ₹ 41,989.99
              </Text>
              <UnorderedList
                mt="15px"
                fontSize={"14px"}
                lineHeight={"25px"}
                fontWeight={"500"}
              >
                <ListItem>Protect data with essential security</ListItem>
                <ListItem>Power business applications</ListItem>
                <ListItem>Collaborate with video conferencing</ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
          <GridItem w="90%" border={"1px solid blu"}>
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                width={"80%"}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/pt-br/other/in5320nt-cnb-05000ff090-gy-fpr-cat-compare.png?$S7-png$&wid=800&hei=550&qlt=100,0&resMode=sharp2"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              border={"1px solid re"}
              width={"75%"}
              m="auto"
            >
              <Text fontSize={"16px"} fontWeight={"bold"} lineHeight={"35px"}>
                Versatile Performance
              </Text>
              <Text fontSize={"16px"} lineHeight={"35px"} fontWeight={"500"}>
                Starting at ₹ 33,990.02
              </Text>
              <UnorderedList
                mt="15px"
                fontSize={"14px"}
                lineHeight={"25px"}
                fontWeight={"500"}
              >
                <ListItem>Perform personal & home office tasks</ListItem>
                <ListItem>Stream, browse and multitask</ListItem>
                <ListItem>Video chat with enhanced audio & visuals</ListItem>
                <ListItem>Create social content</ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
          <GridItem w="90%" border={"1px solid blu"}>
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                width={"80%"}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/brand-compare/module/dell-gen-laptops-g-series-dg5511nt-800x550.png?fmt=png-alpha&wid=800&hei=550&scl=0.85&extend=0,0,0,30"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              border={"1px solid re"}
              width={"75%"}
              m="auto"
            >
              <Text fontSize={"16px"} fontWeight={"bold"} lineHeight={"35px"}>
              Gaming Performance
              </Text>
              <Text fontSize={"16px"} lineHeight={"35px"} fontWeight={"500"}>
              Starting at ₹ 86,989.98
              </Text>
              <UnorderedList
                mt="15px"
                fontSize={"14px"}
                lineHeight={"25px"}
                fontWeight={"500"}
              >
                <ListItem>Boost your gaming experience</ListItem>
                <ListItem>Create videos & online content</ListItem>
                <ListItem>Connect with gaming community</ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="25px"  border={"1px solid re"} justifyContent="center" alignItems="center">
          <GridItem w="90%" >
            
              <Box border={"1px solid blu"} display={"flex"} flexDirection={"column"}>
                <Button my="15px" colorScheme={"blue"} borderRadius={"none"} onClick={()=>{
                  navigate('/VostroList')
                }}>
                  Shop Vostro
                </Button>

                <Button
                  variant={"outline"}
                  colorScheme={"blue"}
                  borderRadius={"none"}
                >
                  Explore Vostro
                </Button>
              </Box>
            
          </GridItem>
          <GridItem w="90%" >
            <Box display={"flex"} flexDirection={"column"} >
              <Button my="15px" colorScheme={"blue"} borderRadius={"none"} onClick={()=>{
                  navigate('/InspironList')
                }} >
                Shop Inspiron
              </Button>

              <Button
                variant={"outline"}
                colorScheme={"blue"}
                borderRadius={"none"}
              >
                Explore Inspiron
              </Button>
            </Box> 
          </GridItem>
          <GridItem w="90%" >
            <Box display={"flex"} flexDirection={"column"} >
              <Button my="15px" colorScheme={"blue"} borderRadius={"none"} >
                Shop G Series
              </Button>

              <Button
                variant={"outline"}
                colorScheme={"blue"}
                borderRadius={"none"}
              >
                Explore G Series
              </Button>
            </Box> 
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default RightLaptop;
