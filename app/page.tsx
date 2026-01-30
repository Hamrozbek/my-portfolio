import { AboutMe, ContactMe, FutureProjects, Header, Hero, Projects, } from "@/modules";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <FutureProjects />
        <ContactMe/>
      </main>
    </>
  );
}
