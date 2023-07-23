import { atom, useAtomState } from "@zedux/react";

const greetingAtom = atom("greeting", "Hello, World!");

const Greeting = () => {
  const [greeting, setGreeting] = useAtomState(greetingAtom);

  return (
    <input
      onChange={(event) => setGreeting(event.target.value)}
      value={greeting}
    />
  );
};

export default Greeting;
