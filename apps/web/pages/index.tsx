import type { NextPage } from "next";

import { Button } from "@chepe/ui";

import ThemeSwitcher from "./../components/ThemeSwitcher";
import Wrapper from "./../components/Wrapper";

const Home: NextPage = () => {
  return (
    <div>
      <ThemeSwitcher />
      <Wrapper>
        <Button>Click me</Button>
      </Wrapper>
    </div>
  );
};

export default Home;
