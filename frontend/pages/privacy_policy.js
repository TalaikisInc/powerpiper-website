import { Component } from 'react'
import 'isomorphic-unfetch'
import Article from 'grommet/components/Article'
import App from 'grommet/components/App'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Animate from 'grommet/components/Animate'

import Layout from './layout'
import _Header from './components/Header'
import _Footer from './components/Footer'

export default class Blog extends Component {
  static async getInitialProps ({ req }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0/flatpage/Privacy Policy/')
    const json = await res.json()
    return { post: json }
  }

  render () {
    this.title = this.props.post.Title
    this.description = this.title
    this.image = ''
    this.total = this.props.post.ID

    return (
      <App centered={false}>
        <Layout>
      <Article responsive={true} margin='none' flex={false} primary={true}>
        {_Header({title: this.title, description: this. description, image: this.image})}
        <Section full={false} pad='medium' align='center' justify='center'>
            <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true} visible={this.visibility}>
                <Heading align='center'>
                    {this.props.post.Title} 
                </Heading>
                <Paragraph align='start' size='large'>
                    <div dangerouslySetInnerHTML={{ __html: this.props.post.Content}} />
                </Paragraph>
            </Animate>
        </Section>
      </Article>
      {_Footer()}
      </Layout>
      </App>
    )
  }
}
