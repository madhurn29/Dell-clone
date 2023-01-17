import { Box, Text, GridItem, Grid } from "@chakra-ui/react";
import WelcomeCard from "./WelcomeCard";
function Welcome() {
  return (
    <Box bg="#f5f6f7" >
      <Box width="95%" margin="auto"  height="500px" pt="40px">
        <Text fontSize="32px" ml="15px" mb="10px">
          Welcome Back
        </Text>
        <Grid height="300px"
          templateColumns="repeat(3, 1fr)"
          gap={6}
          width="98%"
          margin="auto"
          bg="white"
        >
          <GridItem bg="white" w="100%" h="10">
            <WelcomeCard
              imageUrl={
                "https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png"
              }
              heading={"Best Seller"}
              text={"Get our best laptops for less"}
              linkText={"Shop Now"}
            />
          </GridItem>
          <GridItem w="100%" h="10">
            <WelcomeCard
              heading={"Laptop Buying Guide"}
              text={
                "Learn more about the types of Laptops & select the best model for your use."
              }
              linkText={"Learn More"}
            />
          </GridItem>
          <GridItem w="100%" h="10">
            <WelcomeCard
              heading={"Access My Account"}
              text={"Sign in to your account to track & view your orders."}
              linkText={"Sign In"}
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Welcome;
