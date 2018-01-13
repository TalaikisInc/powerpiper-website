import 'isomorphic-unfetch'
import { Component } from 'react'

import Layout from '../layout'
import Block from '../components/Block'

export default class Blog extends Component {
  static async getInitialProps (props) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0/posts/' + (props.page || '0') + '/')
    const json = await res.json()
    return { posts: json }
  }

  render () {
    return (
      <Layout {...this.props}>
        {this.props.posts.map(item => <Block key={item.id} post={item} total={this.props.total} />)}
      </Layout>
    )
  }
}

Blog.defaultProps = {
  title: 'Decentralized Energy Blog',
  description: 'Decentralized Energy Blog',
  image: process.env.BASE_URL + '/' + this.props.posts[0].image,
  total: Object.keys(this.props.posts).length
}
