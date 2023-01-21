import React from "react";
import { Page, Wrapper } from "@chepe/ui";

import ThemeSwitcher from "./components/ThemeSwitcher";
import FormLogin from "./examples/FormLogin";

function App() {
  return (
    <Page>
      <ThemeSwitcher />
      <Wrapper>
        <FormLogin />
      </Wrapper>
    </Page>
  );
}

export default App;
