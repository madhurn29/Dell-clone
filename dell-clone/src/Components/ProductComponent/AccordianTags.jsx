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
  return (
    <Box width={"85%"} m="auto">
      <Box borderRadius={"10px"} bg="#f3f3f3" py="15px" pl="20px" my="10px">
        <Text fontSize={"20px"}>Filter Results</Text>
      </Box>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>Inspiron</Checkbox>
              <Checkbox colorScheme={"blue"}>Vostro</Checkbox>
              <Checkbox colorScheme={"blue"}>XPS</Checkbox>
              <Checkbox colorScheme={"blue"}>G Series</Checkbox>
              <Checkbox colorScheme={"blue"}>Alienware</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>43.18 cm (17 inch)</Checkbox>
              <Checkbox colorScheme={"blue"}>40.60 cm (16 inch)</Checkbox>
              <Checkbox colorScheme={"blue"}>38.10 cm (15 inch)</Checkbox>
              <Checkbox colorScheme={"blue"}>35.56 cm (14 inch)</Checkbox>
              <Checkbox colorScheme={"blue"}>33.02 cm (13 inch)</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>2-in-1 and/or Detachable</Checkbox>
              <Checkbox colorScheme={"blue"}>Detachable</Checkbox>
              <Checkbox colorScheme={"blue"}>Laptop</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>All Intel Processor</Checkbox>
              <Checkbox colorScheme={"blue"}>Intel core i9 K Series</Checkbox>
              <Checkbox colorScheme={"blue"}>Intel core i9</Checkbox>
              <Checkbox colorScheme={"blue"}>Intel core i7</Checkbox>
              <Checkbox colorScheme={"blue"}>Intel core i5</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>12th Gen Intel Core</Checkbox>
              <Checkbox colorScheme={"blue"}>11th Gen Intel Core</Checkbox>
              <Checkbox colorScheme={"blue"}>AMD Ryzen 6000 Series</Checkbox>
              <Checkbox colorScheme={"blue"}>AMD Ryzen 5000 Series</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>Intel Evo</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>₹30,000 - ₹40,000</Checkbox>
              <Checkbox colorScheme={"blue"}>₹40,000 - ₹50,000</Checkbox>
              <Checkbox colorScheme={"blue"}>₹50,000 - ₹60,000</Checkbox>
              <Checkbox colorScheme={"blue"}>₹60,000 - ₹70,000</Checkbox>
              <Checkbox colorScheme={"blue"}>₹70,000 - ₹80,000</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>32 GB</Checkbox>
              <Checkbox colorScheme={"blue"}>16 GB</Checkbox>
              <Checkbox colorScheme={"blue"}>8 GB</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>1 TB or More</Checkbox>
              <Checkbox colorScheme={"blue"}>1 TB</Checkbox>
              <Checkbox colorScheme={"blue"}>512 GB</Checkbox>
              <Checkbox colorScheme={"blue"}>256 GB or Less</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>Dual Drive</Checkbox>
              <Checkbox colorScheme={"blue"}>SSD</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>Windows 11 Home </Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultIndex={[0, 1]}
        allowMultiple
        bg="#f3f3f3"
        borderRadius={"10px"}
        my="10px"
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
              <Checkbox colorScheme={"blue"}>Backlight Keyboard</Checkbox>
              <Checkbox colorScheme={"blue"}>Fingerprint Reader</Checkbox>
              <Checkbox colorScheme={"blue"}>Lightweight</Checkbox>
              <Checkbox colorScheme={"blue"}>Numeric Keypad</Checkbox>
              <Checkbox colorScheme={"blue"}>Touch Screen</Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default AccordianTags;
