const Copy = () => {
  return <div>&copy; {(new Date().getFullYear())} { process.env.SITE_TITLE }</div>
}

export default Copy
