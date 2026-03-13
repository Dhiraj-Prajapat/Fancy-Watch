import HeroPage from './components/home/HeroPage.jsx';

const App = () => {
  const name = "Dhiraj";

  const alert = () => {
    window.alert("Button Clicked");
  }

  return (
    <>
      <div className='AppComponent'>
        <div>App Component Name {name}</div>
        <button onClick={() => alert()}> Alert </button>
      </div>
      <HeroPage />
    </>
  )
}

export default App;


// var, let and const are used to declare variables in JavaScript.
