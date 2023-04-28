import React from "react";

import { Box, chakra, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faComputer,
  faDesktop,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

function IconsBar() {
  const Icon = chakra(FontAwesomeIcon);
  const navigate = useNavigate();
  const navIcons = [
    {
      icon: faLaptop,
      title: "Inspiron",
      link: "/InspironList",
    },
    {
      icon: faComputer,
      title: "Desktop",
    },
    {
      icon: faLaptop,
      title: "Alienware",
      link: "",
    },
    {
      icon: faLaptop,
      title: "Vastro",
      link: "/VostroList",
    },
    {
      icon: faDesktop,
      title: "Monitor",
    },
    {
      icon: faHeadphones,
      title: "Laptop",
    },
  ];
  return (
    <Box
      pt="20px"
      pb="20px"
      bg="#f8f9fb"
      border="1px solid re"
      mt="2px"
      position={"sticky"}
      top={0}
      zIndex={5}
    >
      <Grid
        display="grid"
        gridTemplateColumns="repeat(6,1fr)"
        margin="auto"
        width="70%"
      >
        {navIcons.map((item) => {
          return (
            <GridItem
              key={item.title}
              // border="1px solid black"
              height="80px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                key={item.id}
                icon={item.icon}
                w={8}
                h={12}
                onClick={() => {
                  navigate(item.link);
                }}
              />{" "}
              <Text>{item.title}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default IconsBar;
