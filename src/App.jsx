import { useState } from "react";
import IMG01 from "./assets/img_01.jpg";
import IMG02 from "./assets/img_02.jpg";
import IMG03 from "./assets/img_03.jpg";
import IMG04 from "./assets/img_04.jpg";
import TwitterFollowCard from "./components/TwitterFollowCard";

function App() {
  return (
    <section className="app">
      <TwitterFollowCard
        avatar={IMG01}
        username={"username-01"}
        name={"name-01"}
      />
      <TwitterFollowCard
        avatar={IMG02}
        username={"username-02"}
        name={"name-02"}
      />
      <TwitterFollowCard
        avatar={IMG03}
        username={"username-03"}
        name={"name-03"}
      />
      <TwitterFollowCard
        avatar={IMG04}
        username={"username-04"}
        name={"name-04"}
      />
    </section>
  );
}

export default App;
