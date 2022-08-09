import type { NextPage } from "next";

import { Button, Example, Paragraph } from "ui";

const Home: NextPage = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Example />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eget consectetur tempor, nisl nunc egestas nisi, euismod aliquam
        nisl nunc euismod.
      </Paragraph>
    </div>
  );
};

export default Home;
