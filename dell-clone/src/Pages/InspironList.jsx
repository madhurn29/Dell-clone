import React, { useContext } from "react";
import { Box, Skeleton, Select, Text } from "@chakra-ui/react";
import TopPartPrdouctList from "../Components/InspironListComponent/TopPartPrdouctList";
import AccordianTags from "../Components/ProductComponent/AccordianTags";
import ProductSpecs from "../Components/InspironListComponent/ProductSpecs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RatingScale from "../Components/ProductComponent/RatingScale";
import Pagination from "../Components/InspironListComponent/Pagination";
import { SearchContext } from "../Context/SearchContext";
import SkeletonProductsSpecs from "../Components/InspironListComponent/SkeletonProductsSpecs";
const getPageNumber = (val) => {
  let pageNumber = Number(val);

  if (!pageNumber) {
    pageNumber = 1;
  }

  if (pageNumber <= 0 || typeof pageNumber !== "number") {
    pageNumber = 1;
  }

  return pageNumber;
};
function InspironList() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = 12;
  const [totalProducts, setTotalProducts] = useState();
  const totalPages = Math.ceil(totalProducts / limit);
  const { search } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [SortOrder, setSortOrder] = useState("");

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let pagevalue = searchParams.get("page");


  let intialPage = getPageNumber(pagevalue);
  const [page, setPage] = useState(intialPage);


  const getData = (page, search, SortOrder) => {
 
    setIsLoading(true);
    let url = `${process.env.REACT_APP_SERVER_URL}/inspiron?_page=${page}&_limit=${limit}`;
    if (search) {
      url = `${process.env.REACT_APP_SERVER_URL}/inspiron?_page=${page}&_limit=${limit}&q=${search}`;
    }
    if (SortOrder) {
      url = `${url}&_sort=price&_order=${SortOrder}`;
    }

    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.headers.get("x-total-count"));
        setProductData(response.data);
        setTotalProducts(response.headers.get("x-total-count"));
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });

    getData(page, search, SortOrder);
  }, [page, search, SortOrder]);

  useEffect(() => {
    let paramObj = {
      page: page,
    };

    if (search) {
      paramObj.search = search;
    }
    if (SortOrder) {
      paramObj.SortOrder = SortOrder;
    }

    setSearchParams(paramObj);
  }, [page, search, SortOrder]);

  const handlePageChange = (val) => {
    setPage(page + val);
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  const PageSetter = (val) => {
    setPage(+val);

    window.scroll({
      top: 0,
      left: 0,
    });
  };

  const onSortChange = (val) => {
    setSortOrder(val);
  };
  return (
    <Box>
      <TopPartPrdouctList />
      <Box border={"1px solid re"} textAlign="center" my="15px">
        <Text fontSize={"36px"} fontWeight={400}>
          Inspiron Laptops & 2-in-1 PCs
        </Text>
      </Box>
      <Box className="middlePart" display={"flex"}>
        <Box className="filterSection" width={"20%"} border={"1px solid re"}>
          <AccordianTags
            offerSticky={0}
            financeSticy={60}
            screenSticky={80}
            shopSticky={110}
          />
        </Box>

        <Box
          className="ContentSection"
          width={"80%"}
          border={"1px solid re"}
          display={"flex"}
          flexDirection={"column"}
          pb="10px"
        >
          <Box
            border={"1px solid re"}
            width={"95%"}
            m="auto"
            display={"flex"}
            justifyContent={"end"}
          >
            <Select
              placeholder="Sort By"
              width={"20%"}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="asc">Lowest Price</option>
              <option value="desc">Highest Price</option>
            </Select>
          </Box>
          <Box
            className="ActualContent"
            border={"1px solid blu"}
            width="95%"
            m="auto"
            // borderRadius={"12px"}
            my="15px"
          >
            {isLoading
              ? arr.map((item) => {
                  return <SkeletonProductsSpecs />;
                })
              : productData?.map((item) => {
                  return (
                    <ProductSpecs
                      key={item.id}
                      route={`InspironList`}
                      {...item}
                    />
                  );
                })}
          </Box>

          <Box
            className="Pagination"
            border={"1px solid re"}
            width={"100%"}
            display="flex"
            justifyContent={"center"}
          >
            <Pagination
              handlePageChange={handlePageChange}
              page={page}
              PageSetter={PageSetter}
              totalPages={totalPages}
            />
          </Box>
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

export default InspironList;
{
  /* <ProductSpecs
imageUrl={
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7420-2n1/media-gallery/notebook-inspiron-14-7420-2-in-1-gallery-3.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500"
}
title={"Inspiron 1 2-in-1 Laptop"}
Os={"Windows 11 Home Single Language"}
orderCode={"Order Code d560918win9s"}
rating={"4.2"}
promoCode={"₹2500 OFF | FREE SHIPPING"}
strikethrough={"₹ 86,990.00"}
price={"₹ 79,490.00"}
save={"₹ 7,500.00"}
percentageSav={"(9%)"}
processor={"12th Gen Intel® Core® i5-1235U"}
os={"Windows 11 Home Single Language"}
graphics={"Intel® Iris® Xe Graphics"}
memory={"8 GB, 2 x 4 GB, DDR4, 3200 MHz"}
storage={"512 GB, M.2, PCIe NVMe, SSD"}
display={"35.5-cm. touch display Full HD (1920X1200)"}
emiStatus={"available . See options at checkout."}
emi={"No cost EMI"}
month={"/month"}
/> */
}
