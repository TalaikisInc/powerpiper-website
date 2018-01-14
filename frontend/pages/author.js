import 'isomorphic-unfetch'
import { Component, PropTypes } from 'react'

import Layout from '../layout'
import Block from '../components/Block'

export default class Author extends Component {
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

Author.defaultProps = {
  title: this.props.posts[0].author_id.LastName + ' ' + this.props.posts[0].author_id.FirstName + ' Blog',
  description: this.props.posts[0].author_id.LastName + ' ' + this.props.posts[0].author_id.FirstName + ' Blog',
  image: process.env.BASE_URL + '/' + this.props.posts[0].image,
  total: this.props.posts[0].id,
  menu: true
}

Author.propTypes = {
  posts: PropTypes.array.isRequired
}
