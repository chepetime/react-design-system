import ThemeSwitcher from "./../components/ThemeSwitcher";
import FormLogin from "./../examples/FormLogin";

import { Button } from "stellarkit";
import "stellarkit/dist/style.css";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
        <h1>UI Demo</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          corporis aperiam ab, voluptatem quia iste deleniti quam aut illo,
          totam cumque nobis ipsam maiores, doloribus id consequatur laboriosam.
          Fugit, possimus?
        </p>
        <h2>Hello</h2>
        <Button>Hello</Button>
      </div>
      <div>{/* <FormLogin /> */}</div>
    </div>
  );
}
