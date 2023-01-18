import React from "react";
import { Box } from "@chakra-ui/react";
import TopBanner from "../Components/ProductComponent/TopBanner";
import AccordianTags from "../Components/ProductComponent/AccordianTags";
import BannerComponentProducts from "../Components/ProductComponent/BannerComponentProducts";
import RightLaptop from "../Components/ProductComponent/RightLaptop";
import RatingScale from "../Components/ProductComponent/RatingScale";
function Products() {
  return (
    <Box>
      <TopBanner />
      <Box className="middlePart" display={"flex"}>
        <Box className="FilterSection" width={"20%"} border={"1px solid blac"}>
          <AccordianTags />
        </Box>

        <Box
          className="Content Section"
          width={"80%"}
          border={"1px solid re"}
          display={"flex"}
          flexDirection={"column"}
          pb="10px"
        >
          <Box
            border={"1px solid blu"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            width="95%"
            m="auto"
            borderRadius={"12px"}
            mt="15px"
          >
            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-inspiron-laptops-tile-right-facing.png"
              }
              head={"Inspiron Laptops & 2-in-1 PCs"}
              tagLine={"Versatile Performance | Starting at ₹ 33,990.02"}
              content={
                "Create, consume and connect in style with versatile laptops and 2-in-1s."
              }
              button1Text={"Shop Inspiron"}
              button2Text={"Explore Inspiron"}
              button_1_action={() => {
                alert("shop inspiron");
              }}
            />
            <RightLaptop />

            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-vostro-laptops-tile-left-facing.png"
              }
              head={"Vostro Laptop"}
              tagLine={"Small Business Productivity | Starting at ₹ 41,989.99"}
              content={
                "Power your small business with laptops built to deliver security, performance and enhanced video conferencing."
              }
              button1Text={"Shop Inspiron"}
              button2Text={"Explore Inspiron"}
              imageBoxOrder={1}
            />
            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/prod-2024-notebook-xps-13-9320-nt-13-9315-nt-tablet-13-9315-2-in-1-800x620-v2.png?fmt=png-alpha&wid=800&hei=620"
              }
              head={"XPS Laptops & 2-in-1 PCs"}
              tagLine={"Creators & Creativity | Starting at ₹ 1,04,989.97"}
              content={
                "Power your creativity with premium, high-performing and beautifully-crafted laptops with innovative features."
              }
              button1Text={"Shop XPS"}
              button2Text={"Explore XPS"}
              imageBoxOrder={0}
              bg={"#f3f3f3"}
            />
            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-alienware-laptops-tile-left-facing.png"
              }
              head={"Alienware Gaming Laptops"}
              tagLine={
                "Immersive Gaming Experiences | Starting at ₹ 1,59,989.99"
              }
              content={
                "Experience high-performance gaming with iconic designs and intelligently engineered laptops."
              }
              button1Text={"Shop Alienware"}
              button2Text={"Explore Alienware"}
              imageBoxOrder={1}
            />
            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-g-series-laptops-tile-right-facing.png"
              }
              head={"G Series Gaming Laptops"}
              tagLine={"Gaming Performance | Starting at ₹ 86,989.98"}
              content={
                "Take your game to the next level with split-second responsiveness and dynamic gameplay."
              }
              button1Text={"Shop G Series"}
              button2Text={"Explore G Series"}
              imageBoxOrder={0}
              bg={"#f3f3f3"}
            />

            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-laptop-deals-left-facing.png"
              }
              head={"Laptop Deals"}
              tagLine={"Our best-priced laptop computers"}
              content={
                "Take advantage of limited-time savings on select laptops. Shop our exclusive deals and get the best for less."
              }
              button1Text={"Shop Deals"}
              // button2Text={"Explore Alienware"}
              imageBoxOrder={1}
            />

            <BannerComponentProducts
              imageUrl={
                "https://i.dell.com/sites/csimages/Banner_Imagery/all/in5420ntcnb00055rf110gyfpr2.png"
              }
              head={"Student Laptop Deals"}
              tagLine={"Student Special"}
              content={
                "Take advantage of limited-time deals on a wide range of Inspiron, Vostro and more. Shop our exclusive deals and get the best for less | Buy directly from Dell.com"
              }
              button1Text={"Shop Student Deals"}
              imageBoxOrder={0}
              bg={"#f3f3f3"}
            />
          </Box>
          {/* <RatingScale /> */}
          <Box
            className="Rating Scale"
            border={"1px solid re"}
            width={"100%"}
            display="flex"
            justifyContent={"end"}
          >
            <RatingScale />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
