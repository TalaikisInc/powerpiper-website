import A from '../A'

const Copy = () => {
  return (
    <div>&copy; {(new Date().getFullYear())}
      <span dangerouslySetInnerHTML={{ __html: ` ${process.env.SITE_TITLE} | <A href='/privacy_policy/'>Privacy Policy</A> | <A href='/cookie_policy/'>Cookie Policy</A>`}} />
    </div>
  )
}

export default Copy
