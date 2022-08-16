import useDarkMode from "use-dark-mode";

export default function ThemeSwitcher() {
  const darkMode = useDarkMode(false, {
    storageKey: "demo-darkmode",
    classNameDark: "dark",
    classNameLight: "light",
  });

  return (
    <div className="ThemeSwitcher">
      <h1>React UI</h1>
      <div>
        <span>Change theme to</span>
        <button onClick={darkMode.toggle}>
          {darkMode?.value ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
