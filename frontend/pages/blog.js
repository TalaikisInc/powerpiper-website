import 'isomorphic-unfetch'

import Page from '../components/Page'
import Layout from '../layout'
import Block from '../components/Block'

export default class Blog extends Page {
  static async getInitialProps (props) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0/posts/' + (props.page || '0') + '/')
    const json = await res.json()
    return { posts: json }
  }

  render () {
    const title = 'Decentralized Energy Blog'
    const description = 'Decentralized Energy Blog'
    const image = process.env.BASE_URL + '/' + this.props.posts[0].image
    const total = Object.keys(this.props.posts).length

    return (
      <Layout title={title} description={description} image={image} session={this.props.session}>
        {this.props.posts.map(item => <Block key={item.id} post={item} total={total} />)}
      </Layout>
    )
  }
}
