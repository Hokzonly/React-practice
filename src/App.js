import './App.css';
import Mycomp from './Lists';
import RandomNumberGen from './randomNumber/Random';
import Timer from './Timer';
import UseEff from './Counter/UseEff'
import DataFetcher from './fetch/ApiFetch';
import TodoList from './todoList/TodoList';


function App() {
  return (
    <div className='page'>
       <UseEff/>
       <Mycomp/>
       <Timer/>
       <RandomNumberGen/>
       <DataFetcher/>
       <TodoList/>
    </div>
  );
}

export default App;
