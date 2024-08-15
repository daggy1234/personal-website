import {
  Box,
  Flex,
  VisuallyHidden,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
import { useState } from "react";
import type { IconType } from "react-icons";
import { BsTwitter, BsLinkedin, BsReddit, BsGithub } from "react-icons/bs";

interface IconWrapProps {
  router: NextRouter;
  icon: IconType;
  color: string;
  url: string;
  mouseDown: () => void;
  mouseUp: () => void;
}

const IconWrap = ({
  icon,
  color,
  router,
  url,
  mouseDown,
  mouseUp,
}: IconWrapProps) => {
  return (
    <Box
      onMouseLeave={mouseUp}
      onMouseEnter={mouseDown}
      aria-label={icon.toString()}
      fontSize="2.5em"
      display="inline-block"
      marginRight="1em"
    >
      <VisuallyHidden>{url}</VisuallyHidden>
      <Icon onClick={() => router.push(url)} as={icon} color={color} />
    </Box>
  );
};

const SomeText = () => {
  const router = useRouter();
  const [textColor, SetTextColor] = useState("");

  return (
    <Box
      position={{ base: "relative", md: "absolute" }}
      bottom={0}
      left={0}
      textAlign={{ base: "center", md: "left" }}
      alignContent={{ base: "center", md: "left" }}
      borderTopRightRadius="5%"
      p={{ base: 0, md: 4, lg: 6 }}
      width={{ base: "100%", md: "60%", lg: "50%", xl: "40%" }}
      backgroundColor={useColorModeValue("bgwhite.100", "bgblack.100")}
      marginY={3}
    >
      <Heading
        color={textColor}
        fontWeight="800"
        as="h2"
        fontSize={{ base: "6xl", md: "7xl" }}
      >
        Arnav Jindal
      </Heading>
      <Heading opacity="0.7" as="h3" fontSize={{ base: "xl", md: "3xl" }}>
        Student & Full-Stack Developer
      </Heading>
      <Flex marginX={{ base: "10%", sm: "30%", md: 0 }}>
        <IconWrap
          mouseDown={() => SetTextColor("#1DA1F2")}
          mouseUp={() => SetTextColor("")}
          router={router}
          url="https://twitter.com/daggy1234"
          color="#1DA1F2"
          icon={BsTwitter}
        />
        <IconWrap
          mouseDown={() => SetTextColor("#0e76a8")}
          mouseUp={() => SetTextColor("")}
          router={router}
          url="https://linkedin.com/in/arnavjindal/"
          color="#0e76a8"
          icon={BsLinkedin}
        />
        <IconWrap
          mouseDown={() => SetTextColor("#FF5700")}
          mouseUp={() => SetTextColor("")}
          router={router}
          url="https://reddit.com/u/daggy1234"
          color="#FF5700"
          icon={BsReddit}
        />
        <IconWrap
          mouseDown={() => SetTextColor("")}
          mouseUp={() => SetTextColor("")}
          router={router}
          url="https://github.com/daggy1234"
          color={useColorModeValue("black", "white")}
          icon={BsGithub}
        />
      </Flex>
    </Box>
  );
};

export default SomeText;
