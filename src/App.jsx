import './App.css'
import List from './components/List.jsx';
import PropChallenge from './PropsChallenge.jsx';
import SecondChallenge from './SecondChallenge.jsx';
import Gallery from "./components/Gallery.jsx";
import PackingList from './components/PackingList.jsx';
import TodoList from "./components/TodoList.jsx";
import Recipe from './components/Recipe.jsx';
import TeaGathering from './components/TeaGathering.jsx';
// import Clock from './components/Clock.jsx';

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
      <br />
      <Recipe />
      <br />
      <TeaGathering />
      <br />
      {/* <Clock/> */}
    </>
  )
}