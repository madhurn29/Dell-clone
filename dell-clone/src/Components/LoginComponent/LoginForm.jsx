import React from "react";
import {
  Box,
  Text,
  FormControl,
  Input,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
const init = {
  email: "",
  password: "",
};

function LoginForm() {
  const { setLogin, setName } = useContext(AuthContext);
  const [form, setForm] = useState(init);
  const { email, password } = form;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    
    setForm({ ...form, [name]: value });
  };

  const callToast = (text) => {
    toast({
      title: text,
      position: "top",
      isClosable: true,
    });
  };
  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users?q=${form.email}`)
      .then((res) => {
        if (res.data.length === 0) {
          callToast("User Not Found, Please Sign up");
          
        } else {
          if (res.data[0].password === form.password) {
         
            // setLogin();
            localStorage.setItem("isLogged", true);
            setName(res.data[0].name);
            localStorage.setItem("name", res.data[0].name);
            navigate("/");
          } else {
            callToast("Wrong Credentials");
            
          }
        }
    
      })
      .catch((err) => console.log(err,"from login request"))
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  return (
    <Box className="FormBox" border={"1px solid re"}>
      <Box mt="15px">
        <Button
          borderRadius="none"
          variant="outline"
          color="black"
          width={"100%"}
        >
          {" "}
          <Image
            mr="5px"
            src="https://afcs.dellcdn.com/dci/idp/dwa/images/Google_Icon.svg"
          />{" "}
          Google Sign In
        </Button>
      </Box>
      <FormControl>
        <Box border={"1px solid re"} mt="40px">
          <Input
            placeholder="Email Address"
            type={"text"}
            width="100%"
            border={"1px solid black"}
            borderRadius="none"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box border={"1px solid re"} mt="30px">
          <Input
            placeholder="Password"
            type={"password"}
            width="100%"
            required
            border={"1px solid black"}
            borderRadius="none"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </Box>

        <Box mt="15px">
          <Text textAlign={"center"}>
            Don't remember your password? Create or Reset password
          </Text>
        </Box>

        <Input
          type={"submit"}
          mt="25px"
          value={isLoading ? "Signing In..." : "Sign In"}
          bg="#0077de"
          _hover={{ background: "#006dcf" }}
          color="white"
          borderRadius={"none"}
          onClick={() => {
            handleSubmit();
          }}
        ></Input>
        <Box mt="10px">
          <Text textAlign={"center"}>or</Text>
        </Box>

        <Button
          width={"100%"}
          mt="15px"
          variant={"outline"}
          colorScheme={"blue"}
          borderRadius={"none"}
        >
          Send One Time Password
        </Button>
      </FormControl>
    </Box>
  );
}

export default LoginForm;
