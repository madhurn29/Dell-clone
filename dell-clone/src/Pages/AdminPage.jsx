import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
    useToast,
} from "@chakra-ui/react";
// import { ChevronLeftIcon } from "@chakra-ui/icons";
import axios from "axios";
const init = {
  title: "",
  imageUrl1: "",
  orderCode: "",
  rating: "",
  promoCode: "",
  strikethrough: "",
  price: "",
  save: "",
  percentageSav: "",
  processor: "",
  os: "",
  graphics: "",
  memory: "",
  storage: "",
  display: "",
  emiStatus: "",
  emi: "",
};
function AdminPage() {
  const [form, setForm] = useState(init);
  const [Category, SetCategory] = useState();
  console.log(Category, "category");
  const toast = useToast();

  const callToast = () => {
    toast({
      title: "Product added successfully",
      position: "top",
      isClosable: true,
    });
  };
  const {
    title,
    imageUrl1,
    orderCode,
    rating,
    promoCode,
    strikethrough,
    price,
    save,
    percentageSav,
    processor,
    os,
    graphics,
    memory,
    storage,
    display,
    emiStatus,
    emi,
  } = form;

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  //   console.log(form);
  const setFormFun = (obj) => {
    setForm(obj);
  };
  const handleSubmit = () => {
    let newForm = {
      ...form,
      save: strikethrough - price,
    };
    setFormFun(newForm);
    console.log(newForm);
    PostRequest(Category,newForm);
    callToast()
  };

  const PostRequest = (Category, obj) => {
    let url;

    if (Category === "Inspiron") {
      url = "http://localhost:8080/inspiron";
    }
    if (Category === "Vostro") {
      url = "http://localhost:8080/vostro";
    }
    return axios.post(url, obj).then((response) => {
        console.log(response);
    })
  };
  return (
    <Box border={"1px solid re"}>
      <Box display={"flex"} justifyContent={"center"} border="1px solid black">
        <Box
          border={"1px solid blu"}
          width="70%"
          m="auto"
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
        >
          <Text fontSize={"30px"} textAlign="center">
            Add Products
          </Text>
          <Box border={"1px solid re"} width="70%">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Add Product Title"
                type={"text"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="title"
                width="100%"
                value={title}
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Image</FormLabel>
              <Input
                placeholder="Add Image Url"
                type={"text"}
                border={"1px solid black"}
                borderRadius="none"
                mb="10px"
                name="imageUrl1"
                width="100%"
                value={imageUrl1}
                onChange={(e) => handleChange(e)}
              />
              <FormLabel>Category</FormLabel>
              <Box display={"flex"}>
                <Select
                  placeholder="Select Category"
                  border={"1px solid black"}
                  borderRadius="none"
                  width={"100%"}
                  //   name="date"
                  //   value={date}
                  onChange={(e) => SetCategory(e.target.value)}
                >
                  <option value="Inspiron"> Inspiron</option>
                  <option value="Vostro"> Vostro</option>
                  <option value="AlienWare"> AlienWare</option>
                </Select>
              </Box>
              <Box
                display={"flex"}
                width="100%"
                justifyContent={"space-between"}
              >
                <Box width={"45%"}>
                  <FormLabel>Original Price</FormLabel>
                  <Input
                    placeholder="Add Original Price"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="strikethrough"
                    width="100%"
                    value={strikethrough}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
                <Box width={"45%"}>
                  <FormLabel>Price</FormLabel>

                  <Input
                    placeholder="Add Discounted Price"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="price"
                    width="100%"
                    value={price}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                width="100%"
                justifyContent={"space-between"}
              >
                <Box width={"45%"}>
                  <FormLabel>Order Code</FormLabel>
                  <Input
                    placeholder="Order Code"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="orderCode"
                    width="100%"
                    value={orderCode}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
                <Box width={"45%"}>
                  <FormLabel>Promo Code</FormLabel>

                  <Input
                    placeholder="Add Promo Code"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="promoCode"
                    width="100%"
                    value={promoCode}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent="space-between"
                width={"100%"}
                border="1px solid re"
              >
                <Box width={"45%"}>
                  <FormLabel mt="5px">Processor</FormLabel>{" "}
                  <Select
                    placeholder="Select Processor"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="processor"
                    value={processor}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="12th Gen Intel® Core® i5-1235U">
                      {" "}
                      12th Gen Intel® Core® i5-1235U
                    </option>
                    <option value="AMD Ryzen® 5 5625U 6-core/12-thread Processor with Radeon® Graphics">
                      {" "}
                      AMD Ryzen® 5 5625U 6-core/12-thread Processor with Radeon®
                      Graphics
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
                <Box width={"45%"}>
                  <FormLabel mt="5px">Graphics</FormLabel>{" "}
                  <Select
                    placeholder="Select Graphics"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="graphics"
                    value={graphics}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="AMD Radeon® Graphics with shared graphics memory">
                      {" "}
                      AMD Radeon® Graphics with shared graphics memory
                    </option>
                    <option value="Intel® Iris® Xe Graphics">
                      {" "}
                      VIntel® Iris® Xe Graphics
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                width={"100%"}
                border="1px solid re"
              >
                <Box width={"45%"}>
                  <FormLabel mt="5px">Memory</FormLabel>{" "}
                  <Select
                    placeholder="Select Memory"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="memory"
                    value={memory}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="8GB, 1x8GB, DDR4, 3200MHz">
                      {" "}
                      8GB, 1x8GB, DDR4, 3200MHz
                    </option>
                    <option value="16 GB, 2 x 8 GB, DDR4, 3200 MHz">
                      {" "}
                      16 GB, 2 x 8 GB, DDR4, 3200 MHz
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
                <Box width={"45%"}>
                  <FormLabel mt="5px">Storage</FormLabel>{" "}
                  <Select
                    placeholder="Select Storage"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="storage"
                    value={storage}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="512 GB, M.2, PCIe NVMe, SSD">
                      {" "}
                      512 GB, M.2, PCIe NVMe, SSD
                    </option>
                    <option value="1 TB, M.2, PCIe NVMe, SSD">
                      {" "}
                      1 TB, M.2, PCIe NVMe, SSD
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                width={"100%"}
                border="1px solid re"
              >
                <Box width={"45%"}>
                  <FormLabel mt="5px">Display</FormLabel>{" "}
                  <Select
                    placeholder="Select Display"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="display"
                    value={display}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="35.5-cm. display Full HD (1920X1200)">
                      {" "}
                      35.5-cm. display Full HD (1920X1200)
                    </option>
                    <option value="40.6-cm. display Full HD (1920X1200)">
                      {" "}
                      40.6-cm. display Full HD (1920X1200)
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
                <Box width={"45%"}>
                  <FormLabel mt="5px">Operating System</FormLabel>{" "}
                  <Select
                    placeholder="Select Operating System"
                    border={"1px solid black"}
                    borderRadius="none"
                    width={"100%"}
                    name="os"
                    value={os}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="Windows 11 Home Single Language">
                      {" "}
                      Windows 11 Home Single Language
                    </option>
                    <option value="Windows 10 Home Single Language">
                      {" "}
                      Windows 10 Home Single Language
                    </option>
                    {/* <option value="3"> AlienWare</option> */}
                  </Select>
                </Box>
              </Box>
              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box width={"45%"}>
                  <FormLabel>EMI</FormLabel>
                  <Input
                    placeholder="Enter EMI"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="emi"
                    width="100%"
                    value={emi}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
                <Box width={"45%"}>
                  <FormLabel>Rating</FormLabel>

                  <Input
                    placeholder="Add Rating"
                    type={"text"}
                    border={"1px solid black"}
                    borderRadius="none"
                    mb="10px"
                    name="rating"
                    width="100%"
                    value={rating}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Box>
            </FormControl>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                colorScheme={"green"}
                borderRadius="none"
                width={"150px"}
                onClick={() => handleSubmit()}
              >
                Add Product
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminPage;
