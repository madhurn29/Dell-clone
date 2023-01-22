import React from "react";
import {
  Box,
  Text,
  PinInput,
  PinInputField,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const init = {
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
};

function ThankYou() {
  const [otp, setOtp] = useState(init);
  const toast = useToast();
  const [checkOtp, setCheckOtp] = useState();
  const { otp1, otp2, otp3, otp4 } = otp;
  const [checked, setCheck] = useState(false);

  const random = (x) => {
    x = Math.floor(1000 + Math.random() * 9000);
    return x;
  };

  const callToast = (x) => {
    setCheckOtp(x);
    console.log(checkOtp, "checkOtp");
    toast({
      title: `Please Enter ${x} as OTP`,
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    setOtp({ ...otp, [name]: value });
  };

  useEffect(() => {
    callToast(random());
  }, []);

  const handleSubmit = () => {
    setOtp(otp);
    let otpBag = "";
    for (let val in otp) {
      otpBag += otp[val];
    }
    otpBag == checkOtp && setCheck(true);
  };
  return (
    <Box>
      <Box
        border="1px solid re"
        m="auto"
        display={"flex"}
        justifyContent="center"
      >
        {!checked ? (
          <Box
            border={"1px solid blu"}
            // height="300px"
            p="40px"
            width="30%"
            display={"flex"}
            flexDirection={"column"}
          >
            <Text textAlign={"center"} mt="20px">
              We have sent you One-Time-Password on your registered mobile
              number.
            </Text>
            <Text textAlign={"center"} mt="25px" fontSize={"30px"}>
              Enter the OTP
            </Text>
            <Box m="50px auto">
              <PinInput otp>
                <PinInputField
                  name="otp1"
                  value={otp1}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <PinInputField
                  name="otp2"
                  value={otp2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <PinInputField
                  name="otp3"
                  value={otp3}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <PinInputField
                  name="otp4"
                  value={otp4}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </PinInput>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Button colorScheme={"blue"} onClick={handleSubmit}>
                Pay
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            border={"1px solid re"}
            height="400px"
            display={"flex"}
            // flexDirection="column"
            alignItems="center"
          >
            <Box textAlign={"center"}>
              <Text fontSize={"30px"}>Thank You For Shopping with Us.</Text>

              <Text> Your Ordered will be deliverd within 2-3 days. </Text>
              <Text textDecoration={"underline"} color="blue">
                <Link to="/"> Continue Shopping</Link>
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ThankYou;
