import 'isomorphic-unfetch'

import Layout from '../layout'
import Page from '../components/Page'
import Block from '../components/Block'

export default class Category extends Page {
  static async getInitialProps ({ req }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0' + req.url)
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

Category.defaultProps = {
  title: this.props.posts[0].category_id.Title + ' Blog',
  description: this.props.title,
  image: process.env.BASE_URL + '/' + this.props.posts[0].image,
  total: this.props.posts[0].id
}
