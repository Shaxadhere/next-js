/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart, FiSearch, FiHeart } from "react-icons/fi";
import Link from "next/link";

const Header = (props) => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Logo</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Logo
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center">
            <HStack
              spacing={10}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Box as={Link} href="/">
                <chakra.a fontSize={14} cursor={"pointer"}>
                  Home
                </chakra.a>
              </Box>
              <Box as={Link} href="/shop">
                <chakra.a fontSize={14} cursor={"pointer"}>
                  Shop
                </chakra.a>
              </Box>
              <Box as={Link} href="/new-arrivals">
                <chakra.a fontSize={14} cursor={"pointer"}>
                  New Arrivals
                </chakra.a>
              </Box>
              <Box as={Link} href="/category?name=tops">
                <chakra.a fontSize={14} cursor={"pointer"}>
                  Tops
                </chakra.a>
              </Box>
              <Box as={Link} href="/category?name=bottoms">
                <chakra.a fontSize={14} cursor={"pointer"}>
                  Bottoms
                </chakra.a>
              </Box>
            </HStack>
          </HStack>
          <Flex>
            <Button
            display={{base:"none",sm:"block"}}
              p={0}
              h={"fit-content "}
              bg={"transparent"}
              _focus={{ background: "transparent", boxShadow: "none" }}
              _hover={{ background: "transparent", boxShadow: "none" }}
            >
              <FiShoppingCart fontSize={18} />
            </Button>
            <Button
            display={{base:"none",sm:"block"}}
              p={0}
              h={"fit-content "}
              bg={"transparent"}
              _focus={{ background: "transparent", boxShadow: "none" }}
              _hover={{ background: "transparent", boxShadow: "none" }}
            >
              <FiHeart fontSize={18} />
            </Button>
            <Button
              p={0}
              h={"fit-content "}
              bg={"transparent"}
              _focus={{ background: "transparent", boxShadow: "none" }}
              _hover={{ background: "transparent", boxShadow: "none" }}
            >
              <FiSearch fontSize={18} />
            </Button>
          </Flex>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Header;
