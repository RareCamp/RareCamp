import { useState, ReactNode } from 'react';
import { progress } from 'helpers/calc/progress';

const Nav = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

export default function About() {
  const name: string = 'author';
  const [coins, setCoins] = useState(0);
  return (
    <Nav>
      <h3 data-testid="t">Test page-{name} </h3>
      <h2>
        coins:
        {coins}
      </h2>
      <button
        name="success"
        type="button"
        onClick={progress(setCoins)}
      >
        click me
      </button>
    </Nav>
  );
}
