import Document, { Head, Main, NextScript } from 'next/document'
import cookie from 'react-cookies'

import Session from '../components/Session'

export default class CustomDocument extends Document {
  static async getInitialProps({ renderPage, req }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const session = await Session.getSession({ req })
    const documentPath = req.url
    const lang = 'en' // should be integrated with i18n!!!!!!
    cookie.save('sess_id', session, { path: '/' })
    return { html, head, errorHtml, chunks, documentPath, lang }
  }

  render() {
    return (
      <html lang={this.props.lang || 'en'}>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
