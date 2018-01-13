import { PropTypes } from 'react'
import 'isomorphic-unfetch'
import Router from 'next/router'
import { Component } from 'react'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'
import { FacebookButton, FacebookCount } from 'react-social'
import FormNextIcon from 'grommet/components/icons/base/FormNext'

import Layout from '../layout'
import Date from '../utils/helpers'

export default class Post extends Component {
  static async getInitialProps ({ req }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0' + req.url)
    const json = await res.json()
    return { post: json }
  }

  render () {
    return (
      <Layout {...this.props}>
        <Section full={false} pad='medium' align='center' justify='center'>
          <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true}>
            <Heading align='center'>
              <a href={this.props.categoryUrl} className='grommetux-anchor' onMouseEnter={() => { Router.prefetch(this.props.categoryUrl) }}>
                {this.props.post.CategoryID.Title}
              </a>  <FormNextIcon /> {this.props.post.Title} 
            </Heading>
            <Paragraph>
              By <a href={this.authorUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(this.props.authorUrl)}}>
                {this.props.post.AuthorID.FirstName} {this.props.post.AuthorID.LastName}
              </a>
              &nbsp;|&nbsp;
              {Date(this.props.post.Date)}
            </Paragraph>
            <Image alt={this.props.post.Title} src={this.image} size='large' />
            <Paragraph align='start' size='large'>
              <div dangerouslySetInnerHTML={{ __html: this.props.post.Content}} />
            </Paragraph>
            <div>
              <FacebookButton url={this.props.postUrl} appId={this.props.fbAppId}>
                <FacebookCount url={this.props.postUrl} />
                {' Share ' + this.props.title }
              </FacebookButton>
              <TwitterButton url={this.props.postUrl} appId={this.props.twAppId}>
                <TwitterCount url={this.props.postUrl} />
                {' Share ' + this.props.title }
              </TwitterButton>
              <GooglePlusButton url={this.props.postUrl} appId={this.props.goAppId}>
                <GooglePlusCount url={this.props.postUrl} />
                {' Share ' + this.props.title }
              </GooglePlusButton>
              <LinkedInButton url={this.props.postUrl} appId={this.props.liAppId}>
                <LinkedInCount url={this.props.postUrl} />
                {' Share ' + this.props.title }
              </LinkedInButton>
            </div>
          </Animate>
        </Section>
      </Layout>
    )
  }
}

Post.defaultProps = {
  title: this.props.post.Title,
  description: this.props.post.Title,
  image: process.env.BASE_URL + '/' + this.props.post.Image,
  authorUrl: '/author/' + this.props.post.AuthorID.Username + '/0/',
  categoryUrl: '/category/' + this.props.post.CategoryID.Slug + '/0/',
  postUrl: process.env.BASE_URL + '/' + this.props.post.Slug + '/',
  fbAppId: process.env.FB_APP_ID,
  twAppId: process.env.TWITTER_APP_ID,
  goAppId: process.env.GOOGLE_APP_ID,
  liAppId: process.env.LINKEDIN_APP_ID
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}
