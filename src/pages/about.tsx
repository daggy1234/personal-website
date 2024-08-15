/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Image as CHI,
} from "@chakra-ui/react";
import "react-vertical-timeline-component/style.min.css";
import type { ReactElement } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaDiscord, FaReact } from "react-icons/fa";
import { ImPaintFormat } from "react-icons/im";
import { SiScratch, SiIbm } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// interface TextImageProps {
//   text: string;
//   reverse: boolean;
//   image: string;
//   alt: string;
//   height: number;
//   width: number;
//   cw: string;
// }

interface TimelineElementProps {
  date: string;
  icon: ReactElement<any, any>;
  heading: string;
  description: string;
  location: string;
  bg: string;
}

const TimelineElement = ({
  date,
  icon,
  heading,
  description,
  location,
  bg,
}: TimelineElementProps) => {
  const box_bg = useColorModeValue("#EDF2F7", "#212930");
  const text_c = useColorModeValue("#000", "#fff");
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ background: box_bg, color: text_c }}
      dateClassName="timelinedatestyle"
      contentArrowStyle={{ borderRight: `7px solid  ${box_bg}` }}
      date={date}
      iconStyle={{
        boxShadow: `0 0 0 4px ${box_bg}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
        background: bg,
        color: "#fff",
      }}
      icon={icon}
    >
      <Heading size="lg" as="h3">
        {heading}
      </Heading>
      <Heading size="md" as="h4">
        {location}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  );
};

// const TextImage = ({
//   text,
//   reverse,
//   image,
//   alt,
//   height,
//   width,
//   cw,
// }: TextImageProps) => {
//   return (
//     <Flex
//       marginY={{ base: 0, md: "2%" }}
//       paddingX={{ base: 0, md: 4, xl: 10 }}
//       marginX={{ base: 0, xl: "10%" }}
//       direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
//     >
//       <Box
//         mr={{ base: 0, md: 3 }}
//         ml={{ base: 0, md: 3 }}
//         textAlign={{ base: "center", md: "left" }}
//         width={{ base: "100%", md: cw }}
//       >
//         <Text>{text}</Text>
//       </Box>
//       <Box>
//         <Image height={height} width={width} src={image} alt={alt} />
//       </Box>
//     </Flex>
//   );
// };

const About = () => {
  const bl = useColorModeValue("brand.400", "brand.600");
  const b = useColorModeValue("#EDF2F7", "#212930");
  return (
    <Box>
      <Flex alignItems="center" direction="column">
        <Heading as="h2" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: bl,
              zIndex: -1,
            }}
          >
            About Me
          </Text>
        </Heading>
        <Box marginY="5%">
          <Text
            mx="auto"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            maxW="60%"
          >
            I&apos;m a 20-year-old college student at Duke. I grew up in
            Chennai, Delhi, Gurgaon and Bangalore before moving to Durham to
            attend Duke. I&apos;m passionate about COmputer Science, started
            coding when I was 14 and Have a huge variety of projects under my
            belt. I&apos;m currently focusing on research and software
            engineering for large companies and startups.{" "}
          </Text>
        </Box>
      </Flex>
      <Flex alignItems="center" direction="column">
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            My CS Journey
          </Text>
        </Heading>
        <VerticalTimeline lineColor={b}>
          <TimelineElement
            icon={<BiCodeAlt />}
            location="Chennai"
            bg="#149414"
            heading="Started Programming"
            date="2011"
            description="Started Learning to code with Python (Udemy) and Javascript Animations (Khan Academy)"
          />
          <TimelineElement
            icon={<SiScratch />}
            location="New Delhi"
            bg="#f6ab3c"
            heading="Scratch Game Development"
            date="2015"
            description="Via School's hour of code and external classes I started making games in scratch. Mostly simple games, this developed an early intrest in code and taught me logical thuiking! "
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/oQODMmY.png" />}
            location="Bangalore- NAFL"
            bg="#ff9bd3"
            heading="IGCSE Computer Science"
            date="2018 - 2020"
            description="A* in IGCSE computer science with distinction. I learnt theory as well as practical coursework with python"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/8EFyuVt.png" />}
            location="Bangalore"
            bg="#5865F2"
            heading="IBM Proffesional Data Science Certification )"
            date="2020"
            description="Completed IBM's 9 part course on becoming a professional data scientist. Worked with pandas, sklearn, matplotlib and more to finish a capstone with interactive maps!"
          />
          <TimelineElement
            icon={<FaDiscord />}
            location="Bangalore"
            bg="#5865F2"
            heading="Discord Bot Development (discord.py, serenity.rs)"
            date="2020 - present"
            description="Discord bot development with the discord api. Initially started with discord.py, worked my way up and beame comfortable. Shifted to serenity with rust. Also made 8+ PR's and was an active contributor to the library"
          />
          <TimelineElement
            icon={<FaReact />}
            location=""
            bg="#67daf9"
            heading="Web Dev/MERN Stack"
            date="2020 - present"
            description="Started with basic web development stuff, slowly became comfortable with html, css, js. Worked with TS and became great with MERN!"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/0eaRcNu.png" />}
            location="Bangalore - MAIS"
            bg="#ff9bd3"
            heading="A Level Computer Science"
            date="2020 - 2022"
            description="Working on getting an A Level CS course. 2020-2021 year :A [top grade], predicted A* for 2021-2022. More advanced theory including python and java programming"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/vsOGsb2.png" />}
            location="remote"
            bg="#67daf9"
            heading="Znotes Internship"
            date="2020 - 2021"
            description="Started with some basic React Development, but full trasntioned to a role involving Python bot development and DevOps work. Contributed with a team on github"
          />
          <TimelineElement
            icon={<SiIbm />}
            location=""
            bg="#000"
            heading="IBM Internship"
            date="2020 - 2021"
            description="Worked with IBM and the NGO emancipaction to use IBM technology and help victims of human trafficing/child abuse get mental health help via a chatbot. Helped create chatbot with IBM watson and integrate into a website"
          />
          <TimelineElement
            icon={<CHI src="/dagpiw.png" />}
            location=""
            bg="#805ed2"
            heading="CEO/Founder Dagpi"
            date="2020 - present"
            description="Founder and CEO of Saas service dagpi that offers image manipulation at scale! AWS activate funded and over 500+ active users. Fully open source with stripe payments, microservices and kuerbnetes"
          />
          <TimelineElement
            icon={<ImPaintFormat />}
            location=""
            bg="#EB459E"
            heading="Theme Developer"
            date="2020 - 2022"
            description="Worked on themes for VSC, and Better Discord/Powercord. Themes have 100k+ downloads aldready!"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/wMdLsNB.png" />}
            location=""
            bg="#0a549a"
            heading="New Circuit Internship"
            date="2021"
            description="New Circuit is a development group that works with popular youtuber PewDiePie. As an intern I worked with them on odcumentation and typescript dev work."
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/Gt5OyfT.png" />}
            location=""
            bg="#fcd8b6"
            heading="Gifting a Life NGO Work"
            date="2021"
            description="Gifting a life NGO is an organisation that runs vaccine drives and has covid resource portals. I revamped the website and added whatsapp integrations."
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/NVcozFB.png" />}
            location=""
            bg="#fcd8b6"
            heading="Vitamin Coin"
            date="2021"
            description="Worked as a developer on an emerging crypto currency Vitc. Helped develop the discord and twitter tipbots for vitamin coin"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/BVec63a.png" />}
            location="Remote"
            bg="#fcd8b6"
            heading="ReachBest"
            date="2022"
            description="Worked as a full-stack software engineering intern. Created a dashboard to help visualize college admission statistics and also wrote deployment pipelines and CI for ease of development!"
          />
          <TimelineElement
            icon={
              <CHI src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/300px-Duke_Athletics_logo.svg.png" />
            }
            location="Durham,NC"
            bg="#fcd8b6"
            heading="Systems Research Assistantship"
            date="2023"
            description="Worked with Dr. Mathew Lentz and Dr. Danyang Zhou for building mRPC an enhancement of gRPC with a focus on security and performance."
          />
          <TimelineElement
            icon={<CHI src="https://trendup.ai/logo.svg" />}
            location="Remote"
            bg="#fcd8b6"
            heading="Software Engineering Intern - Full Stack"
            date="2023"
            description="Worked at TrendUP AI after YC S'23 to help run distrubuted scraping of social media. Created pipelines to vectorize data train LLMs to generate social media contebt."
          />
          <TimelineElement
            icon={
              <CHI src="https://avatars.slack-edge.com/2020-07-18/1273308828000_0c9f709573c954c074c8_102.png" />
            }
            location="Durham, NC"
            bg="#fcd8b6"
            heading="Database+NLP Research"
            date="2024"
            description="WOrked with Dr. Jun Yang and Dr. Bhuwan Dhingra to create systems to scrape youtube comment and video data. Also made NLP models to classify data as vaccine related to live track misinformation."
          />
          <TimelineElement
            icon={
              <CHI src="https://m.media-amazon.com/images/I/31epF-8N9LL.png" />
            }
            location="Seattle, WA"
            bg="#fcd8b6"
            heading="Software Engineering Intern"
            date="2024"
            description="Worked at Amazon's retail accessibility team. Managaed scaleable serverless infra, continous pipelines. Built custom UI to run scans and display results. "
          />
        </VerticalTimeline>
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _before={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              top: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            The journey continues...
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
