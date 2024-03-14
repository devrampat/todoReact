function ChildComponent(props) {
  return (
    <div style={{background:'lightgreen', border: '1px solid red'}}>
      <div>Child Component 1</div>
      <div>{`Task Name: `}</div>
    </div>
  )
}

export default ChildComponent;