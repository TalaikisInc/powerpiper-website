const Copy = () => {
  const siteTitle = process.env.SITE_TITLE
  return <div>&copy; {(new Date().getFullYear())} {siteTitle}</div>
}

export default Copy
