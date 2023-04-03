import { Page, Wrapper, Heading, Text, Spacer } from "@chepe/ui";

import ThemeSwitcher from "./components/ThemeSwitcher";
import FormLogin from "./examples/FormLogin";

function App() {
  return (
    <Page>
      <ThemeSwitcher />
      <Wrapper>
        <Heading as="h1">DS ui Demo</Heading>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          corporis aperiam ab, voluptatem quia iste deleniti quam aut illo,
          totam cumque nobis ipsam maiores, doloribus id consequatur laboriosam.
          Fugit, possimus?
        </Text>
      </Wrapper>
      <Wrapper>
        <FormLogin />
      </Wrapper>
    </Page>
  );
}

export default App;
