import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://dag.gy" isExternal>
          Daggy1234
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
