import Document, { Head, Main, NextScript } from 'next/document'
import App from 'grommet/components/App'

export default class CustomDocument extends Document {
  render () {
    const { html } = this.props
    const baseURL = process.env.BASE_URL || ''

    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || 'en'}>
        <Head>
          <meta charSet='utf-8' />
          <link rel='canonical' href={baseURL} />
          <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
        </Head>
        <body>
          <App centered={false}>
            <Main />
          </App>
          <NextScript />
        </body>
      </html>
    )
  }
}
