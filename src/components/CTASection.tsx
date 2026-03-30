// @ts-nocheck
import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/nextarter-chakra";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          aria-label="Deploy to Vercel"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-chakra"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Code>npx degit sozonome/nextarter-chakra {"<YOUR_APP_NAME>"}</Code>
        <br />

        <a
          href="https://github.com/sozonome/nextarter-chakra/generate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button marginTop={2} size="sm">
            Use This Template
          </Button>
        </a>
      </Box>

      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Button leftIcon={<AiFillGithub />} size="sm">
            Open in Github
          </Button>
        </a>
        <Link
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sozonome/nextarter-chakra?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
