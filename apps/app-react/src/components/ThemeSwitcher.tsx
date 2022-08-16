import { useState } from "react";

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
      <h1>DEX React</h1>
      <div>
        <span>Change theme to</span>
        {theme === "light" && (
          <button onClick={() => changeTheme("dark")}>Dark</button>
        )}
        {theme === "dark" && (
          <button onClick={() => changeTheme("light")}>Light</button>
        )}
      </div>
    </div>
  );
}
