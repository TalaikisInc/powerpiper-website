import { PropTypes } from 'react'
import 'isomorphic-unfetch'
import Router from 'next/router'

import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'
import { FacebookButton, FacebookCount } from 'react-social'

import Page from '../components/Page'
import Layout from '../layout'
import _Footer from '../components/Footer'
import Date from '../utils/helpers'

export default class Post extends Page {
  static async getInitialProps ({ req }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0' + req.url)
    const json = await res.json()
    return { post: json }
  }

  render () {
    const title = this.props.post.Title
    const description = this.props.post.Title
    const image = process.env.BASE_URL + '/' + this.props.post.Image
    const authorUrl = '/author/' + this.props.post.AuthorID.Username + '/0/'
    const categoryUrl = '/category/' + this.props.post.CategoryID.Slug + '/0/'
    const postUrl = process.env.BASE_URL + '/' + this.props.post.Slug + '/'
    const fbAppId = process.env.FB_APP_ID
    const twAppId = process.env.FB_APP_ID
    const goAppId = process.env.FB_APP_ID
    const liAppId = process.env.FB_APP_ID

    return (
      <Layout title={title} description={description} image={image}>
        <Article responsive={true} margin='none' flex={false} primary={true}>
          <Section full={false} pad='medium' align='center' justify='center'>
            <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true}>
              <Heading align='center'>
                <a href={categoryUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(this.categoryUrl)}}>
                  {this.props.post.CategoryID.Title}
                </a>  >> {this.props.post.Title} 
              </Heading>
              <p>
                By <a href={this.authorUrl} className='grommetux-anchor' onMouseEnter={() => { Router.prefetch(authorUrl) }}>
                  {this.props.post.AuthorID.FirstName} {this.props.post.AuthorID.LastName}
                </a>
                &nbsp;|&nbsp;
                {Date(this.props.post.Date)}
              </p>
              <Image alt={this.props.post.Title} src={this.image} size='large' />
              <Paragraph align='start' size='large'>
                <div dangerouslySetInnerHTML={{ __html: this.props.post.Content}} />
              </Paragraph>
              <div>
                <FacebookButton url={postUrl} appId={fbAppId} type='facebook'>
                  <FacebookCount url={postUrl} />
                  {' Share ' + postUrl }
                </FacebookButton>
                <TwitterButton url={postUrl} appId={twAppId}>
                  <TwitterCount url={postUrl} />
                  {' Share ' + postUrl }
                </TwitterButton>
                <GooglePlusButton url={postUrl} appId={goAppId}>
                  <GooglePlusCount url={postUrl} />
                  {' Share ' + postUrl }
                </GooglePlusButton>
                <LinkedInButton url={postUrl} appId={liAppId}>
                  <LinkedInCount url={postUrl} />
                  {' Share ' + postUrl }
                </LinkedInButton>
              </div>
            </Animate>
          </Section>
        </Article>
        {_Footer()}
      </Layout>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}
