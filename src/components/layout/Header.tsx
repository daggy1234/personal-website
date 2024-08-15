import { Box, Flex, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import Link from "next/link";
import type React from "react";

import MenuButton from "./MenuButton";
import ThemeToggle from "./ThemeToggle";

interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <Box display="inline-block" marginRight={{ base: "0.5em", lg: "1em" }}>
      {children}
    </Box>
  );
};

const HeaderTextComponent = ({ text, url }: { text: string; url: string }) => {
  const hc = useColorModeValue("#dee3ed", "#1d1e20");
  // const bl = useColorModeValue("brand.400", "brand.600");

  return (
    <MenuItem>
      <Heading
        _hover={{
          background: `${hc} none repeat scroll 0% 0%`,
          // border: `0 none ${bl}`,
          // borderBottom: "5px",
        }}
        padding={2}
        rounded="md"
        fontWeight="500"
        as="h2"
        size="md"
      >
        <Link href={url}>{text}</Link>
      </Heading>
    </MenuItem>
  );
};

interface HeaderProps {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {
  const bl = useColorModeValue("brand.400", "brand.600");
  return (
    <Flex
      mx={8}
      my={4}
      alignItems="center"
      as="header"
      width="full"
      align={{ base: "left", md: "center" }}
    >
      <Heading fontWeight="bold" as="h1" size="lg">
        <Text
          as="span"
          position="relative"
          mb={1}
          _after={{
            content: "''",
            width: "full",
            height: "20%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: bl,
            zIndex: -1,
          }}
        >
          <Link href="/">Daggy1234</Link>
        </Text>
      </Heading>
      <Box mx={8} marginLeft="auto">
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HeaderTextComponent text="home" url="/" />
          <HeaderTextComponent text="about" url="/about" />
          <HeaderTextComponent text="projects" url="/projects" />
          <HeaderTextComponent text="contact" url="/contact" />
          <HeaderTextComponent text="resume" url="/resume.pdf" />
          {/* <HeaderTextComponent text="donate" url="https://dagpi.xyz/donate" /> */}
          <MenuItem>
            <ThemeToggle />
          </MenuItem>
        </Flex>
        <Flex alignItems="center" display={{ base: "flex", md: "none" }}>
          <MenuItem>
            <ThemeToggle />
          </MenuItem>
          <MenuItem>
            <MenuButton onClick={onOpen} />
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
