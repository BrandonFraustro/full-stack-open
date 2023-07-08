import './App.css'


const Header = (props) => {
  console.log('Header: ', props.course.name);
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  /* console.log('Part: ', props) */
  return (
    <p>Part {props.part.name} exersice: {props.part.exersices}</p>
  )
}

const Content = (props) => {
  /* console.log('Content: ', props) */
  return (
    <div>
      <Part part={props.parts.parts[0]}/>
      <Part part={props.parts.parts[1]}/>
      <Part part={props.parts.parts[2]}/>
    </div>
  )
}
const Total = (props) => {
  console.log('Total ', props.parts.parts[0].exersices)
  return (
    <p>Number of exersices is: {props.parts.parts[0].exersices + props.parts.parts[1].exersices
    + props.parts.parts[2].exersices}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development' ,
    parts: [
      {
        name: 'Fundamentals of React',
        exersices: 10 ,
      },
      {
        name: 'Using props to pass data',
        exersices: 7,
      },
      {
        name: 'State of a component',
        exersices: 14,
      }
    ]
  }
  /* console.log(parts[0].exersices) */
  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course}/>
    </div>
  )
}

export default App
