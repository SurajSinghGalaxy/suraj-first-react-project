import * as React from "react";
import HeroBanner from "./HeroBanner";
import About from "./About";
import Shop from "./Shop";
const heroItem = [
  {
    id: "A",
    bannerHeading: "Hello winner",
    bannerPara:
      "Your are winners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    miniPara: "Welcome to the club.",
    bannerSubHeading:
      "“Chaos rising” for my audience minds and “doubt organising” is what Ido every day.",
    scroll: "Scroll Down",
  },
];
function Home() {
  return (
    <>
      {heroItem.map((item, index) => {
        return (
          <>
            <HeroBanner
              custId={item.id}
              key={item.id}
              custHeroHeading={item.bannerHeading}
              custHeroPara={item.bannerPara}
              custMiniPara={item.miniPara}
              custSubHeading={item.bannerSubHeading}
              custScroll={item.scroll}
            />
            <About />

            <Shop />
          </>
        );
      })}
    </>
  );
}

export default Home;
