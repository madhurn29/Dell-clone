import React from "react";
import { Box } from "@chakra-ui/react";
import IconsBar from "../Components/HomePageComponents/IconsBar";
import ImageComponent from "../Components/HomePageComponents/ImageComponent";
import Welcome from "../Components/HomePageComponents/Welcome";
import BannerComponents from "../Components/HomePageComponents/BannerComponents";
import DellSupport from "../Components/HomePageComponents/DellSupport";
import FooterPart from "../Components/FooterComponent/FooterPart";

function Home() {
  return (
    <Box>
      <IconsBar />
      <ImageComponent />
      <Welcome />
      <BannerComponents
        imageUrl={
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-homepage-module-rf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842"
        }
        head={"INSPIRON LAPTOPS"}
        tagLine={"Power Yours Success Story"}
        content={
          "Give yourself a tech edge with 10% cashback on Citi cards or instant discounts on UPI & headsets."
        }
        link1={"Shop Now"}
        link2={"Learn More"}
      />

      <BannerComponents
        imageUrl={
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842"
        }
        head={"ALIENWARE 27 GAMING MONITOR"}
        tagLine={"Outshine Everyone"}
        content={
          "Built-in bragging rights with premium performance, overclockable refresh rates up to 280Hz and more."
        }
        link1={"Shop Now"}
        link2={"Learn More"}
        contentBoxOrder={1}
        imageBoxOrder={2}
      />
      <DellSupport />
      <BannerComponents
        imageUrl={
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-vostro-3525nt-uhp-2304-12-in-homepage-module-rf-1023x842.png?fmt=png-alpha&wid=1023&hei=842"
        }
        head={"VOSTRO LAPTOPS"}
        tagLine={"Empower Your Business Today"}
        content={
          "More power to you with 10% cashback on Citi cards & Alienware headsets."
        }
        link1={"Shop Now"}
        link2={"Learn More"}
        contentBoxOrder={2}
        imageBoxOrder={1}
      />

      <Box
        className="Horizontal Banner"
        display={"flex"}
        padding={"10px"}
        // border="1px solid red"
      >
        <Box borderRight={"1px solid black"} width="55%">
          <BannerComponents
            imageUrl={
              "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/2-ups/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-in-homepage-2up-module-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0"
            }
            head={"REPUBLIC DAY OFFERS"}
            tagLine={"Set Your Creativity Free"}
            content={
              "Celebrate Republic Day with 10% cashback on Citi cards or instant discounts on UPI & headsets."
            }
            link1={"For Home"}
            link2={"Learn More"}
            contentBoxOrder={1}
            imageBoxOrder={2}
            flexDirection="column"
            contentBoxWidth={"100%"}
            imageBoxWidth={"90%"}
          />
        </Box>
        <Box>
          <BannerComponents
            imageUrl={
              "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/banners/q4w1-con-warm-2updeal2-wl5022-km7321w-mh3021p-800x400.jpg?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0"
            }
            head={"COMPUTER ELECTRONICS AND ACCESSORIES"}
            tagLine={"Overprepared For Everything"}
            content={
              "Whether you're looking for a keyboard, mouse, docking station or something else, we've got you covered."
            }
            link1={"Shop Now"}
            link2={"Learn More"}
            contentBoxOrder={1}
            imageBoxOrder={2}
            flexDirection="column"
            contentBoxWidth={"100%"}
            imageBoxWidth={"90%"}
          />
        </Box>
      </Box>
      <FooterPart/>
    </Box>
  );
}

export default Home;
