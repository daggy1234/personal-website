/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Daggy1234's Portfolio",
  titleTemplate: "%s | Daggy1234",
  defaultTitle: "Daggy1234 (Arnav Jindal) Portfolio",
  description: "Personal website that showcases Daggy1234's best work, tells you about Arnav Jindal and has some fun eastern eggs",
  canonical: "https://daggy.tech",
  openGraph: {
    url: "https://daggy.tech",
    title: "Daggy1234's Portfolio",
    description: "Personal website that showcases Daggy1234's best work, tells you about Arnav Jindal and has some fun eastern eggs",
    images: [
      {
        url: "https://www.daggy.tech/daggy_big.png",
        height: 1024,
        width: 1024,
        alt: "png",
      },
    ],
    site_name: "Daggy1234's Portfolio",
  },
  twitter: {
    handle: "@daggy12345",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
