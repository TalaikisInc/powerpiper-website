const Copy = () => {
  return (
    <div>&copy; {(new Date().getFullYear())}
      <span dangerouslySetInnerHTML={{__html: ` ${process.env.SITE_TITLE}`}} />
    </div>
  )
}

export default Copy
