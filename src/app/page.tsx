import HomePage from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  creator: "Jace Royer",
  openGraph: {
    title: "jroyvibes",
    description: "Jace Royer's portfolio, for all things past, present, and future.",
    url: "https://jroyvibes.vercel.app/",
    siteName: "jroyvibes",
    images: [
      {
        url: "https://imgur.com/lB2MaTl",
        width: 800,
        height: 800
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default HomePage;