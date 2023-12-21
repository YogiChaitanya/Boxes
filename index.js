const Box = props => {
  //  Write your code here.
  const {nameText, className} = props

  return (
    <div className={`box ${className}`}>
      <p>{nameText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Boxes</h1>
    <div className='card-container'>
      <Box nameText='Small' className='yellow-box' />
      <Box nameText='Medium' className='blue-box' />
      <Box nameText='Large' className='pink-box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
