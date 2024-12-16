import reactimage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactdescription = ["Fundamental", "Core", "Crucial"];
function randomint(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactdescription[randomint(2)];
  return (
    <header>
      <img src={reactimage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function CoreConcepts() {
  return (
    <ul>
      {CORE_CONCEPTS.forEach((item) => {
        <CoreConcept
          title={item.title}
          description={item.description}
          imgpath={item.image}
        />;
      })}
    </ul>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
