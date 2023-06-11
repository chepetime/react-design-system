import ThemeSwitcher from "./../components/ThemeSwitcher";
import FormLogin from "./../examples/FormLogin";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <div>
        <h1>UI Demo</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          corporis aperiam ab, voluptatem quia iste deleniti quam aut illo,
          totam cumque nobis ipsam maiores, doloribus id consequatur laboriosam.
          Fugit, possimus?
        </p>
      </div>
      <div>
        <FormLogin />
      </div>
    </div>
  );
}
