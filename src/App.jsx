import './App.css'
import List from './List.jsx';
import PropChallenge from './PropsChallenge.jsx';
import SecondChallenge from './SecondChallenge.jsx';
import Gallery from "./components/Gallery.jsx";
import PackingList from './components/PackingList.jsx';
import TodoList from "./components/TodoList.jsx";

export default function App() {
  return (
    <>
      <Gallery />
      <br />
      <TodoList />
      <br />
      <PropChallenge />
      <br />
      <SecondChallenge />
      <br />
      <PackingList />
      <br />
      <List />
    </>
  )

}