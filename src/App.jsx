import './App.css'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>part {props.part} exersice {props.exersices}</p>
  )
}

const Content = (props) => {
  const { parts } = props
  return (
    <div>
      {parts.map(part => (
        <Part key={part.part} part={part.part} exersices={part.exersices}/>
      ))}
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exersices is: {props.total}</p>
  )
}

function App() {
  const course = 'Half Stack application development' 
  const parts = [
    { part: 'Fundamentals of React', exersices: 10 },
    { part: 'Using props to pass data', exersices: 7 },
    { part: 'State of a component', exersices: 14 },
  ]
  const totalExercises = parts.reduce((sum, part) => sum + part.exersices, 0)
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App
