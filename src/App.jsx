import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { ListDogs } from "./components/ListDogs";
import './App.css';


export const App = () => {
  return (
    <section>
      <Header />
      <Counter />
      <ListDogs />
    </section>
  );
}
