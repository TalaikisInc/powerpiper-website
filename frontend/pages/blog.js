import 'isomorphic-unfetch'
import { Component } from 'react'

import Layout from '../layout'
import Block from '../components/Block'

export default class Blog extends Component {
  static async getInitialProps (props) {
    // eslint-disable-next-line no-undef
    const apiUrl = process.env.API_URL ? process.env.API_URL : console.log(process.env.API_URL)
    const res = await fetch(apiUrl + '/api/v1.0/posts/' + (props.page || '0') + '/')
    const json = await res.json()
    const serverUrl = process.env.SERVER_URL

    return {
      posts: json,
      title: 'Decentralized Energy Blog',
      description: 'Decentralized Energy Blog',
      image: serverUrl + json[0].image,
      total: Object.keys(json).length,
      menu: true
    }
  }

  render () {
    return (
      <Layout {...this.props}>
        {this.props.posts.map(item => <Block key={item.id} post={item} total={this.props.total} />)}
      </Layout>
    )
  }
}
