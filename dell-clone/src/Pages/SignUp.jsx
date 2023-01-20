import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import SignUpForm from "../Components/SignupComponent/SignUpForm";
function SignUp() {
  return (
    <Box display={"flex"}>
      <Box className="Form" border={"1px solid re"} width={"50%"}>
        <Box width={"70%"} border={"1px solid blac"} m="auto" mb="50px">
          <Box textAlign={"center"} mt="30px">
            <Text fontSize={"40px"}>Create Your Account</Text>
            <Text my="20px">
              Already have an account?{" "}
              <RouterLink to="/signin" style={{color:"blue"}}> Sign In </RouterLink>{" "}
            </Text>
          </Box>

          <SignUpForm />
        </Box>
      </Box>
      <Box
        bg="#f5f6f7"
        className="Image"
        border={"1px solid re"}
        width={"50%"}
        mt="2px"
      >
        <Box border={"1px solid re"} textAlign={"center"} mt="30px">
          <Text fontSize={"40px"}>Dell Account Benefits</Text>
          <Text fontSize={"16px"} mt="15px">
            My Account is an easy, more centralized way to manage your tech.
            Sign Up Now!
          </Text>
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          border="1px solid re"
          mt="20px"
          py="20px"
        >
          <GridItem border={"1px solid blu"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"16px"}
              textAlign="center"
            >
              <Image
                my="10px"
                src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-1-tracking-36x36.png"
              />
              <Text my="10px">Order Tracking</Text>
              <Text px="10px">
                Manage orders, track shipping status and view support history
              </Text>
            </Box>
          </GridItem>
          <GridItem border={"1px solid blu"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"16px"}
              textAlign="center"
            >
              <Image
                my="10px"
                src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-2-mail-36x36.png"
              />
              <Text my="10px">Manage Communications</Text>
              <Text px="10px">
                Manage marketing and communications preferences
              </Text>
            </Box>
          </GridItem>
          <GridItem border={"1px solid blu"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"16px"}
              textAlign="center"
            >
              <Image
                my="10px"
                src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-3-profile-36x36.png"
              />
              <Text my="10px">Profile Setting</Text>
              <Text px="10px">
                Save your favorite payment method and shipping details for
                quicker checkout
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <Box border="1px solid re" display={"flex"} justifyContent={"center"}>
          <Image src="https://i.dell.com/sites/csimages/Banner_Imagery/all/bannerimage460x460.png" />
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
