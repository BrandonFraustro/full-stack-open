import { render } from 'react-dom'
import './App.css'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <p>{props.parts} {props.exersices}</p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exersices is: {props.total}</p>
  )
}

function App() {
  const course = 'Half Stack application development' 
  const part1 = 'Fundamentals of React' 
  const exersices1 = 10
  const part2 = 'Using props to pass data' 
  const exersices2 = 7
  const part3 = 'State of a component'
  const exersices3 = 14
  return (
    <div>
      <Header course={course} />
      <Content parts={part1} exersices={exersices1}/>
      <Content parts={part2} exersices={exersices2}/>
      <Content parts={part3} exersices={exersices3}/>
      <Total total={exersices1 + exersices2 + exersices3}/>
    </div>
  )
}

export default App
