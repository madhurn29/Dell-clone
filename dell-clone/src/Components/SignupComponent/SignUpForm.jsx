import React from "react";
import {
  Box,
  Text,
  FormControl,
  Input,
  Image,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const init = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

function SignUpForm() {
  const [form, setForm] = useState(init);
  const { name, lastname, email, password } = form;

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/users", form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setForm(init);
  };
  console.log("form", form);
  return (
    <Box className="FormBox">
      <FormControl>
        <Box display={"flex"} justifyContent={"space-between"} mb="20px">
          <Box border={"1px solid re"} width="49%">
            <Input
              placeholder="Name"
              type={"text"}
              width="100%"
              border={"1px solid black"}
              borderRadius="none"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box border={"1px solid re"} width="49%">
            <Input
              placeholder="Lastname"
              type="text"
              width="100%"
              border={"1px solid black"}
              borderRadius="none"
              name="lastname"
              value={lastname}
              onChange={(e) => handleChange(e)}
            />
          </Box>
        </Box>

        <Input
          placeholder="Email"
          type={"email"}
          border={"1px solid black"}
          borderRadius="none"
          mb="20px"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />

        <Input
          placeholder="Password"
          type={"password"}
          border={"1px solid black"}
          borderRadius="none"
          mb="10px"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />

        <Box display={"flex"}>
          <Image src="https://afcs.dellcdn.com/dci/idp/dwa/images/info-icon.svg"></Image>
          <Text mt="18px" fontSize={"12px"}>
            Passwords must be between 8 and 20 characters in length and contain
            1 upper case letter, 1 lower case letter, and 1 number.
          </Text>
        </Box>
        <Box my="25px">
          <Text fontSize={"12px"}>
            Dellco Technologies and its group of companies (“Dellco”) would like
            to stay in touch and update you on products, services, solutions,
            exclusive offers, and special events. For more details about our
            information practices, see our Privacy Statement. You can
            unsubscribe at any time.
          </Text>
        </Box>
        <Box>
          <Checkbox>
            {" "}
            <Text fontSize={"12px"}>
              Yes, I would like Dell to send me email communications. By
              clicking “Create Account”, you agree to our Terms & Conditions.
            </Text>
          </Checkbox>
        </Box>

        <Input
          type={"submit"}
          mt="25px"
          value="Create Account"
          bg="#0077de"
          _hover={{ background: "#006dcf" }}
          color="white"
          borderRadius={"none"}
          onClick={() => {
            handleSubmit();
          }}
        ></Input>
        <Button
          width={"100%"}
          mt="25px"
          variant={"outline"}
          colorScheme={"blue"}
          borderRadius={"none"}
        >
          Cancel
        </Button>
      </FormControl>
    </Box>
  );
}

export default SignUpForm;
