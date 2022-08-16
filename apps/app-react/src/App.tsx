import React from "react";

import "./App.css";

import { DexButton } from "dex-react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />

      <Wrapper>
        <DexButton>Hello</DexButton>
      </Wrapper>
    </div>
  );
}

export default App;
