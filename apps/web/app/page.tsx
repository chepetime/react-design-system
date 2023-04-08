import Image from "next/image";
import { Inter } from "next/font/google";

import { Page, Wrapper, Heading, Text, Spacer } from "@chepe/ui";

import ThemeSwitcher from "./../components/ThemeSwitcher";
import FormLogin from "./../examples/FormLogin";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <ThemeSwitcher />
      <Wrapper>
        <Heading as="h1">UI Demo</Heading>
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
