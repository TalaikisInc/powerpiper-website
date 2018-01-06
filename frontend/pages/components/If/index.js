const If = (props) => {
  if (props.condition) {
    return (
      <div>
        { props.children }
      </div>
    )
  }
  return null
}

export default If
