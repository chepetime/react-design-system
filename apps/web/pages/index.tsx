import type { NextPage } from "next";

import { Button, Example } from "ui";

const Home: NextPage = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Example />
    </div>
  );
};

export default Home;
