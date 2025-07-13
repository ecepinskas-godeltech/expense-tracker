import { Logo } from './components/Logo';
import { Loader } from './components/Loader';
import { Button } from './components/Button';
import { InputLabel } from './components/InputLabel';
import { Input } from './components/Input';
import { Icon } from './components/Icon';
import { onInputChange } from './utils/onInputChange';
import { onButtonClick } from './utils/onButtonClick';

function App() {
  return (
    <>
      <Logo />
      <Loader size={1} />
      <Button
        text="Sign in"
        aria="Primary sign in button"
        disabled={false}
        type="primary"
        onClick={onButtonClick}
      />
      <Button
        text="Sign in"
        aria="Primary disabled sign in button"
        disabled={true}
        type="primary"
        onClick={onButtonClick}
      />
      <Button
        text="Sign in"
        aria="Ghost sign in button"
        disabled={false}
        type="ghost"
        onClick={onButtonClick}
      />
      <Button
        text="Sign in"
        aria="Ghost disabled sign in button"
        disabled={true}
        type="ghost"
        onClick={onButtonClick}
      />
      <InputLabel text="Label" htmlFor="input" type="label" />
      <InputLabel text="Caption" htmlFor="input" type="caption" />
      <Input
        type="text"
        name="test"
        placeholder="Text input"
        aria="Input field for title"
        defaultValue=""
        onChange={onInputChange}
        helperText="Enter your name"
        helperTextType="caption"
        errorMessage="Field can not be empty"
      />
      <Icon iconName="Bell" />
    </>
  );
}

export default App;
