import { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import Article from 'grommet/components/Article'
import App from 'grommet/components/App'

import Layout from './layout'
import Block from './components/Block'
import _Header from './components/Header'
import _Footer from './components/Footer'

export default class Blog extends Component {
  static async getInitialProps (props) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0/posts/' + (props.page || '0'))
    const json = await res.json()
    return { posts: json }
  }

  render () {
    this.title = 'Decentralized Energy Blog'
    this.description = 'Decentralized Energy Blog'
    this.image = ''

    return (
      <App centered={false}>
        <Layout>
      <Article responsive={true} margin='none' flex={false} primary={true}>
        {_Header({title: this.title, description: this. description, image: this.image})}
        {this.props.posts.map(item => <Block key={item.id} title={item.title} author={item.author_id} image={item.image} content={item.content} date={item.date} />)}
        {_Footer()}
      </Article>
      </Layout>
      </App>
    )
  }
}
