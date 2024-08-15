import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { SiPypi, SiDocker } from "react-icons/si";

interface FeaturedProjectTypeIconType {
  id: number;
  icon: IconType;
  url: string;
}

interface FeaturedProjectType {
  id: number;
  alt: string;
  name: string;
  height: number;
  width: number;
  description: string;
  images: string[];
  tags: string[];
  icons: FeaturedProjectTypeIconType[];
  reversed: boolean;
}
const FeaturedProjectList: FeaturedProjectType[] = [
  {
    id: 0,
    alt: "dagpi website",
    name: "Dagpi",
    height: 1032,
    width: 1919,
    description:
      "Dagpi is an advanced full-stack SaaS platform specializing in image manipulation with monetization. It combines a next.js frontend, an express.js backend using TypeScript, Python FastAPI for image manipulation, and Actix Rust for auth/metrics, all networked via Docker and Nginx, and monitored with Grafana and Prometheus.",
    images: ["/dagpi_home_w.png", "/dagpi_home_b.png"],
    tags: [
      "python",
      "api",
      "rust",
      "react",
      "docker",
      "express",
      "linux",
      "pgsql",
      "stripe",
      "grafana",
    ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/dagpi",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://dagpi.xyz",
      },
    ],
    reversed: true,
  },
  {
    id: 1,
    alt: "polaroid github",
    name: "Polaroid",
    height: 1031,
    width: 1920,
    description:
      "Polaroid is an Image Manipulation Library for python written in rust. By combining the speed of rust with the ease of python, I've developed an up-and-coming image library to rival PIL!",
    images: ["/polaroid_w.png", "/polaroid_b.png"],
    tags: ["rust", "images", "python", "pypi", "pyo3"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/polaroid",
      },
      {
        id: 1,
        icon: SiPypi,
        url: "https://pypi.org/project/polaroid/",
      },
    ],
    reversed: false,
  },
  {
    id: 2,
    alt: "BlueRide",
    name: "BlueRide",
    height: 1024,
    width: 1820,
    description:
      "BlueRide is an iOS app with a TypeScript Express backend that allows people to choose flights they’re taking/leaving by and get algorithmically matched to other people to facilitate carpools.",
    images: ["/blueride.png", "/blueride.png"],
    tags: ["ios", "typescript", "express", "algorithm", "carpool"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/hack-duke/rideshare-ios",
      },
      {
        id: 1,
        icon: BsGithub,
        url: "https://github.com/hack-duke/rideshare-backend",
      },
      {
        id: 2,
        icon: FaAppStoreIos,
        url: "https://apps.apple.com/us/app/blueride-airport-rideshare/id6478838281",
      },
    ],
    reversed: true,
  },
  {
    id: 3,
    alt: "FainAI",
    name: "FainAI",
    height: 1024,
    width: 1820,
    description:
      "FainAI dynamically scrapes course lecture website transcripts, slides, textbooks, and more. Trained an LLM and fine-tuned it to teach me algorithms on a FastAPI backend. Built a ChatGPT-like UI to render markdown.",
    images: ["/fainai.png", "/fainai.png"],
    tags: ["python", "fastapi", "llm", "scraping", "ml"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/fainai",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://fain.dag.gy",
      },
    ],
    reversed: false,
  },
  {
    id: 4,
    alt: "CryptoBot",
    name: "CryptoBot",
    height: 1024,
    width: 1820,
    description:
      "CryptoBot dynamically scrapes and caches real-time crypto pricing data. Built my own cryptocurrency and observability around it to track prices of it and other cryptos. Allows users to have a virtually simulated crypto trading experience with virtual currency being custom cryptocurrency.",
    images: ["/cryptobot_light.png", "/cryptobot_dark.png"],
    tags: ["python", "api", "crypto", "websocket", "docker"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/cryptobot",
      },
    ],
    reversed: true,
  },
  {
    id: 5,
    alt: "SafeMeds",
    name: "SafeMeds",
    height: 1024,
    width: 1820,
    description:
      "SafeMeds is a full-stack app featuring a backend that allows users to add drugs they use and get drug interactions based on lifestyle habits. Saves data and dynamically pulls interactions from FDA API.",
    images: ["/safemeds.jpg", "/safemeds.jpg"],
    tags: ["python", "api", "healthcare", "database", "fda"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/DukeDifference/SafeMeds",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://safe-meds.vercel.app/",
      },
    ],
    reversed: false,
  },
  {
    id: 6,
    alt: "dagbot in discord",
    name: "Dagbot",
    height: 1040,
    width: 1457,
    description:
      "Dagbot was my first serious bot! Dagbot is written in python, with tons of features using discord api, dagpi and a variety of others. Coupled with A MERN stack dashboard that syncs with the bot, this is a fully full stack app!",
    images: ["/dagbot_ss_w.png", "/dagbot_ss_b.png"],
    tags: [
      "python",
      "bot",
      "react",
      "express",
      "ts",
      "docker",
      "kubernetes",
      "pgsql",
      "mongodb",
    ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/dagbot",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://dagbot.dag.gy",
      },
      {
        id: 2,
        icon: SiDocker,
        url: "https://github.com/daggy1234/dagbot/pkgs/container/dagbot",
      },
    ],
    reversed: true,
  },
];

export default FeaturedProjectList;
