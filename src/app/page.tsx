
import { Fragment } from "react";
import Hero from "@/components/home/hero";
import ListOfSkills from "@/components/home/listOfSkills";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <ListOfSkills />
    </Fragment>
  );
}
