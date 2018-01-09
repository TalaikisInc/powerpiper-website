import 'isomorphic-unfetch'
import Article from 'grommet/components/Article'

import Layout from '../layout'
import Page from '../components/Page'
import Block from '../components/Block'
import _Footer from '../components/Footer'

export default class Blog extends Page {
  static async getInitialProps ({ req }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0' + req.url)
    const json = await res.json()
    return { posts: json }
  }

  render () {
    const title = this.props.posts[0].author_id.LastName + ' ' + this.props.posts[0].author_id.FirstName + ' Blog'
    const description = this.title
    const image = process.env.BASE_URL + '/' + this.props.posts[0].image
    const total = this.props.posts[0].id

    return (
      <Layout title={title} description={description} image={image}>
        <Article responsive={true} margin='none' flex={false} primary={true}>
          {this.props.posts.map(item => <Block key={item.id} post={item} total={total} />)}
        </Article>
        {_Footer()}
      </Layout>
    )
  }
}
