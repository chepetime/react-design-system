import type { NextPage } from "next";

import { Button } from "ui";

import ThemeSwitcher from "./../components/ThemeSwitcher";
import Wrapper from "./../components/Wrapper";

const Home: NextPage = () => {
  return (
    <>
      <ThemeSwitcher />
      <Wrapper>
        <Button>Click me</Button>
      </Wrapper>
    </>
  );
};

export default Home;
