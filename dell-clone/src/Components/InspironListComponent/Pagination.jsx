import React from "react";
import { Box, Button } from "@chakra-ui/react";
function Pagination({totalPages,handlePageChange,page,PageSetter}) {
  return (
    <Box border={"1px solid re"} width="30%" display={"flex"} justifyContent={"space-between"}>
      <Button  disabled={page===1} onClick={()=>handlePageChange(-1)} colorScheme={"blue"} variant={"outline"} borderRadius="none">
        Previous
      </Button>

      <Button value={page} onClick={(e)=>console.log(e.target.value)}  colorScheme={"blue"}  borderRadius="none">
        {page}
      </Button>
      <Button value={page+1} disabled={page+1>totalPages} onClick={(e)=>PageSetter(e.target.value)} colorScheme={"blue"} variant={"outline"} borderRadius="none">
        {page+1}
      </Button>
      <Button value={page+2} disabled={page+2>totalPages} onClick={(e)=>PageSetter(e.target.value)} colorScheme={"blue"} variant={"outline"} borderRadius="none">
        {page+2}
      </Button>
      <Button disabled={page>=totalPages} onClick={()=>handlePageChange(+1)} colorScheme={"blue"} variant={"outline"} borderRadius="none">
        Next
      </Button>
    </Box>
  );
}

export default Pagination;
