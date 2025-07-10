import { Logo } from './components/Logo';
import { Loader } from './components/Loader';
import { Button } from './components/Button';

function App() {
  const buttonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <Logo />
      <Loader size={1} />
      <Button
        text="Sign in"
        aria="Primary sign in button"
        disabled={false}
        type="primary"
        onClick={buttonClick}
      />
      <Button
        text="Sign in"
        aria="Primary disabled sign in button"
        disabled={true}
        type="primary"
        onClick={buttonClick}
      />
      <Button
        text="Sign in"
        aria="Ghost sign in button"
        disabled={false}
        type="ghost"
        onClick={buttonClick}
      />
      <Button
        text="Sign in"
        aria="Ghost disabled sign in button"
        disabled={true}
        type="ghost"
        onClick={buttonClick}
      />
    </>
  );
}

export default App;
