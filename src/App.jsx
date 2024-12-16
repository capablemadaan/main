const reactdescription=['Fundamental','Core','Crucial'];
function randomint(max){
  return Math.floor(Math.random()*(max+1));
}
function Header(){
  return (<header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactdescription[randomint(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;