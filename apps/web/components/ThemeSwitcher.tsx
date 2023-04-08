"use client";
import { useState } from "react";

import { Button } from "@chepe/ui";
import { React as ReactIcon } from "@chepe/icons";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  function changeTheme(newTheme: string) {
    if (newTheme !== "") {
      setTheme((current) => {
        document.body.classList.remove(current);
        document.body.classList.add(newTheme);
        return newTheme;
      });
    }
  }

  return (
    <div className="ThemeSwitcher">
      <div>
        <div className="ThemeSwitcher__Content">
          <h1 className="ThemeSwitcher__Title">
            <ReactIcon fill="#fff" />{" "}
            <span style={{ marginLeft: "1rem" }}>Design System Demo</span>
          </h1>
          <div>
            <span>Change theme to</span>
            {theme === "light" && (
              <Button onClick={() => changeTheme("dark")}>Dark</Button>
            )}
            {theme === "dark" && (
              <Button onClick={() => changeTheme("light")}>Light</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
