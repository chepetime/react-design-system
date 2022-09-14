import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

const version = "0.1.0";

export function printAppName() {
  clear();
  const today = new Date();
  const month = today.getMonth();

  console.log(
    chalk.red(
      figlet.textSync("Token Manager", {
        font: month === 9 ? "Ghost" : "Colossal",
        verticalLayout: "fitted",
        width: 80,
        whitespaceBreak: true,
      })
    )
  );

  console.log(
    chalk.red(
      figlet.textSync(`version`, {
        font: "Standard",
      }),
      figlet.textSync(version, {
        font: "Wow",
      })
    )
  );
}
