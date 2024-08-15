import { Box, useDisclosure } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const border = useColorModeValue("#000", "#fff");
  return (
    <Box
      marginX={{ base: 0, md: 8 }}
      margin="0 auto"
      transition="0.5s ease-out"
    >
      <Box>
        <Header onOpen={onOpen} />
        {/* <Box border={`0 solid ${border}`} borderBottomWidth="2px" /> */}
        <Drawer isOpen={isOpen} onClose={onClose} />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
