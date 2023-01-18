import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Text,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

function AccordianTags() {
  const ColorScheme="blue"

  return (
    <Box width={"85%"} m="auto">
      <Box borderRadius={"10px"} bg="#f3f3f3" py="15px" pl="20px" my="15px" >
        <Text fontSize={"20px"}>Filter Results</Text>
      </Box>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
        
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Product Line</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Inspiron</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Vostro</Checkbox>
              <Checkbox colorScheme={ColorScheme}>XPS</Checkbox>
              <Checkbox colorScheme={ColorScheme}>G Series</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Alienware</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Screen Size</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>43.18 cm (17 inch)</Checkbox>
              <Checkbox colorScheme={ColorScheme}>40.60 cm (16 inch)</Checkbox>
              <Checkbox colorScheme={ColorScheme}>38.10 cm (15 inch)</Checkbox>
              <Checkbox colorScheme={ColorScheme}>35.56 cm (14 inch)</Checkbox>
              <Checkbox colorScheme={ColorScheme}>33.02 cm (13 inch)</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Form Factor</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>2-in-1 and/or Detachable</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Detachable</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Laptop</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Processor</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>All Intel Processor</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Intel core i9 K Series</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Intel core i9</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Intel core i7</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Intel core i5</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Processor Generation</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>12th Gen Intel Core</Checkbox>
              <Checkbox colorScheme={ColorScheme}>11th Gen Intel Core</Checkbox>
              <Checkbox colorScheme={ColorScheme}>AMD Ryzen 6000 Series</Checkbox>
              <Checkbox colorScheme={ColorScheme}>AMD Ryzen 5000 Series</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Processor Platform</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Intel Evo</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Price</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>₹30,000 - ₹40,000</Checkbox>
              <Checkbox colorScheme={ColorScheme}>₹40,000 - ₹50,000</Checkbox>
              <Checkbox colorScheme={ColorScheme}>₹50,000 - ₹60,000</Checkbox>
              <Checkbox colorScheme={ColorScheme}>₹60,000 - ₹70,000</Checkbox>
              <Checkbox colorScheme={ColorScheme}>₹70,000 - ₹80,000</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Memory (RAM)</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>32 GB</Checkbox>
              <Checkbox colorScheme={ColorScheme}>16 GB</Checkbox>
              <Checkbox colorScheme={ColorScheme}>8 GB</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Storage Size</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>1 TB or More</Checkbox>
              <Checkbox colorScheme={ColorScheme}>1 TB</Checkbox>
              <Checkbox colorScheme={ColorScheme}>512 GB</Checkbox>
              <Checkbox colorScheme={ColorScheme}>256 GB or Less</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Storage Type</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Dual Drive</Checkbox>
              <Checkbox colorScheme={ColorScheme}>SSD</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Operating System</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Windows 11 Home </Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Graphics</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>All Intel graphics</Checkbox>
              <Checkbox colorScheme={ColorScheme}>All NVIDIA graphics </Checkbox>
              <Checkbox colorScheme={ColorScheme}>All AMD graphics</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Intel Iris Xe</Checkbox>
              <Checkbox colorScheme={ColorScheme}>NVIDIA GeForce RTX 3080 Ti</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Shipping</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>In stock for Fast Delivery</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Standard Shipping</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Color Options</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Grey</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Black</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Silver</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Green</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Blue</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Features</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Backlight Keyboard</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Fingerprint Reader</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Lightweight</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Numeric Keypad</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Touch Screen</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Offers</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>Headest</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Cashback</Checkbox>
              <Checkbox colorScheme={ColorScheme}>UPI</Checkbox>
              <Checkbox colorScheme={ColorScheme}>Net Banking</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Financing Options</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}>No cost EMI</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Screen Resolution</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}> UHD</Checkbox>
              <Checkbox colorScheme={ColorScheme}> QHD</Checkbox>
              <Checkbox colorScheme={ColorScheme}> 3K</Checkbox>
              <Checkbox colorScheme={ColorScheme}> FHD+</Checkbox>
              <Checkbox colorScheme={ColorScheme}> FHD</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="15px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"}>Shop by Use</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"left"}>
              <Checkbox colorScheme={ColorScheme}> Customize & Buy</Checkbox>
              <Checkbox colorScheme={ColorScheme}> Thin & Light</Checkbox>
              <Checkbox colorScheme={ColorScheme}> Professional</Checkbox>
              <Checkbox colorScheme={ColorScheme}> Casual Gaming</Checkbox>
              <Checkbox colorScheme={ColorScheme}> Photo & Video Editing</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default AccordianTags;
