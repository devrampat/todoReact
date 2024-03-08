function ChildComponent(props) {

  const updateValue = () => {
    const someRandomText = 'lorem ipsum';
    props.updateChildComponent(someRandomText);
  }

  return (
    <div style={{background:'lightgreen', border: '1px solid red'}}>
      <div>Child Component</div>
      <div>{`Value of some text:  ${props.someText ? props.someText : 'NA'}`}</div>
      <button onClick={updateValue}>Update</button>
    </div>
  )
}

export default ChildComponent;