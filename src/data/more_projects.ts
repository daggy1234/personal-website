import { BsGithub, BsDownload } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLink } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { SiDocker, SiDiscord, SiGithub } from "react-icons/si";

interface MoreProjectTypeIconType {
  id: number;
  icon: IconType;
  url: string;
}

interface MoreProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icons: MoreProjectTypeIconType[];
}

const MoreProjectsList: MoreProjectType[] = [
  {
    id: 0,
    title: "Animatcher",
    description:
      "An anime inspired dating app that features auth, registration an algorithim that ,atches you based on anime taste. It also festures a tinder-like UI and profile editing. Chat with in-app realtime websocket powered chat.",
    tags: ["postgres", "next", "websockets", "python", "ORM", "auth"],
    icons: [
      {
        id: 0,
        icon: FaLink,
        url: "https://animatcher.xyz",
      },
      {
        id: 1,
        icon: BsGithub,
        url: "https://github.com/AniMatcher/Web",
      },
      {
        id: 2,
        icon: SiGithub,
        url: "https://github.com/AniMatcher/Backend",
      },
    ],
  },
  {
    id: 1,
    title: "Image Uploader",
    description:
      "A classic image uploader to post images to. With fs writes, a UI to upload images, a REST API and a authorization system featuring both username/password and a token. Fully customizeable and designed to be self-hosted, it also features a docker image to run.",
    tags: ["tailwind", "html", "rust", "actix", "docker"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/image-uploader",
      },
      {
        id: 1,
        icon: SiDocker,
        url: "https://github.com/Daggy1234/image-uploader/pkgs/container/image-uploader",
      },
    ],
  },
  {
    id: 2,
    title: "DagPaste",
    description:
      "DagPaste is my take on hastebin. Self hosteable, it features highlight js syntax highlighting, rest API to add pastes, and raw paste fetching. Using the fs, and rocket.rs for the rust api its fast, performant and looks great! Speedy with rust + vanillajs + css and template rendering",
    tags: ["rust", "rocket", "docker", "html", "css", "js"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/DagPaste",
      },
      {
        id: 1,
        icon: SiDocker,
        url: "https://hub.docker.com/repository/docker/daggy1234/pastebin",
      },
      {
        id: 2,
        icon: BsDownload,
        url: "https://mega.nz/folder/QZ8Clbia#kCmJm3iS4PkwYHuKBRzT5g",
      },
    ],
  },
  {
    id: 3,
    title: "PokeType",
    description:
      "An esoteric programming language (esolang) is designed to test the boundaries of computer programming design, as a proof of concept, as software art. My idea was making stack based expression evaluator that uses emojis. Use emojis to express operations and evaluate numbers. Mentioned by a top esolang blog",
    tags: ["pyo3", "encryption", "esolang", "rust", "compiler", "cli"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/PokeType",
      },
      {
        id: 1,
        icon: FaLink,
        url: "https://esolangs.org/wiki/PokeType",
      },
    ],
  },
  {
    id: 4,
    title: "Ewaste App",
    description:
      "A Work in progress idea to help users find waste recycling locations. The idea being, users get a map of possible nearby ewaste drop-off locations. The app uses location data to show nearby dropoff points and get navigation and info about them!",
    tags: [
      "nextjs",
      "firebase",
      "firestore",
      "auth",
      "googlemaps",
      "geolocation",
      "",
    ],
    icons: [
      {
        id: 1,
        icon: CgWebsite,
        url: "https://ewaste-app.vercel.com",
      },
    ],
  },
  {
    id: 5,
    title: "R.Daggy",
    description:
      "A private moderation discord bot written in rust. It features reaction roles, moderation, information, fun and more. Using the serenity.rs librray and the discord API it supports slash commands and text commands! The bot also is compiled to a binary inside a minimal docker image, to be run effortlessly with env vars",
    tags: ["rust", "serenity", "docker", "discord"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/r.daggy",
      },
      {
        id: 1,
        icon: SiDocker,
        url: "https://quay.io/daggy1234/rdaggy",
      },
      {
        id: 2,
        icon: SiDiscord,
        url: "https://server.dag.gy",
      },
    ],
  },
];

export default MoreProjectsList;
