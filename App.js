import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import * as math from 'mathjs'
import OutputScreen from './Components/OutputScreen';
import Title from './Components/Title';
import Button from './Components/Button';



function App() {
  const [question, setQuestion ] = useState('')
  const [answer, setAnswer] =  useState('')

const addQuestion= (val) => {
  setQuestion((question)=>[...question, val +""])
} 
const getResult =() => {
  const input = question.join("");
  setAnswer(math.evaluate(input));
};

const resetInput = () => {
  setQuestion("");
  setAnswer("");
};
  return (
    <div className="container" >
      <Title title="My calculator" />
      <OutputScreen question={question} answer={answer}/>
      <div className="frame">
      <div className="btn btn-primary">
      <Button label={'AC'} handleClick={resetInput}/>
      
      <Button label={'.'} handleClick={addQuestion}/>
      <Button label={'/'} handleClick={addQuestion}/>
      </div>
      <div className="btn btn-primary">
        <Button label={'7'} handleClick ={addQuestion}/>
        <Button label={'8'}handleClick={addQuestion}/>
        <Button label={'9'}handleClick={addQuestion}/>
        <Button label={'*'}handleClick={addQuestion}/>
      </div>
      <div className="btn btn-primary">
        <Button label={'4'}handleClick={addQuestion}/>
        <Button label={'5'}handleClick={addQuestion}/>
        <Button label={'6'}handleClick={addQuestion}/>
        <Button label={'-'}handleClick={addQuestion}/>
      </div>
      <div className="btn btn-primary">
        <Button label={'1'}handleClick={addQuestion}/>
        <Button label={'2'}handleClick={addQuestion}/>
        <Button label={'3'}handleClick={addQuestion}/>
        <Button label={'+'}handleClick={addQuestion}/>
      </div>
      <div className="btn btn-primary">
        <Button label={'0'}handleClick={addQuestion}/>
        <Button label={'='}handleClick={getResult}/>
      </div>
      </div>
    </div>
  );
}

export default App;
