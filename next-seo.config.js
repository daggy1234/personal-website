/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Daggy1234's Portfolio",
  titleTemplate: "%s | Daggy1234 Portfolio",
  defaultTitle: "Daggy1234's Portfolio",
  description: "A website that tells you about me, showcases my work and has some fun hidden treats!",
  canonical: "https://daggy.tech",
  openGraph: {
    url: "https://daggy.tech",
    title: "Daggy1234's Portfolio",
    description: "A website that tells you about me, showcases my work and has some fun hidden treats!",
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
    handle: "@evrybodyajr",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
