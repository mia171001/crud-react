import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import './App.css';

export const App = () => {
  return (
    <section className="container">
      <Header />
      <Counter />
    </section>
  );
}
