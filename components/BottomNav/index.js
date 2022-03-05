/* eslint-disable react/jsx-key */
import { Flex, useColorModeValue, Button } from "@chakra-ui/react";

import { BiSearch, BiHome, BiUser, BiBell } from "react-icons/bi";
import React from "react";
const BottomNav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      borderColor={useColorModeValue("inherit", "gray.700")}
      h="14"
      display={{ base: "flex", sm: "none" }}
      style={{
        position: "fixed",
        bottom: 0,
        borderTop: "1px solid rgb(225 225 225)",
      }}
    >
      <Button
        _active={{ bg: "#cbd5e0" }}
        _focus={{ bg: "#cbd5e0" }}
        bg="transparent"
      >
        <BiHome size={18} />
      </Button>
      <Button
        _active={{ bg: "#cbd5e0" }}
        _focus={{ bg: "#cbd5e0" }}
        bg="transparent"
      >
        <BiSearch size={18} />
      </Button>
      <Button
        _active={{ bg: "#cbd5e0" }}
        _focus={{ bg: "#cbd5e0" }}
        bg="transparent"
      >
        <BiBell size={18} />
      </Button>
      <Button
        _active={{ bg: "#cbd5e0" }}
        _focus={{ bg: "#cbd5e0" }}
        bg="transparent"
      >
        <BiUser size={18} />
      </Button>
    </Flex>
  );
};

export default BottomNav;
