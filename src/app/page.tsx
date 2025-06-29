
import { Fragment } from "react";
import Hero from "@/components/home/hero";
import ListOfSkills from "@/components/home/listOfSkills";
import About from "@/components/home/about";
import WorkProcess from "@/components/home/workprocess";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <ListOfSkills />
      <About />
      <WorkProcess />
    </Fragment>
  );
}
