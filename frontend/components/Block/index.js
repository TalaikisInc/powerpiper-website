import { Component } from 'react'
import PropTypes from 'prop-types'

import Router from 'next/router'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'
import FormNextIcon from 'grommet/components/icons/base/FormNext'

import Date from '../../utils/helpers'

export default class Block extends Component {
  render () {
    const image = process.env.BASE_URL + '/' + this.props.post.image
    const authorUrl = '/author/' + this.props.post.author_id.Username + '/0/'
    const categoryUrl = '/category/' + this.props.post.category_id.Slug + '/0/'
    const articleUrl = '/post/' + this.props.post.slug + '/'
    const visibility = this.props.post.id == this.props.total ? undefined : 'scroll'

    return (
      <Section full={false} pad='medium' align='center' justify='center'>
        <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true} visible={visibility}>
          <Heading align='center'>
            <a href={this.categoryUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(categoryUrl)}}>
              {this.props.post.category_id.Title}
            </a>  <FormNextIcon />
            <a href={articleUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(articleUrl)}}>
              {this.props.post.title} 
            </a>
          </Heading>
          <Paragraph>
            By <a href={authorUrl} 
              className='grommetux-anchor' 
              onMouseEnter={() => {Router.prefetch(authorUrl)}}>
              {this.props.post.author_id.FirstName} {this.props.post.author_id.LastName}
            </a>
            &nbsp;|&nbsp;
            {Date(this.props.post.date)}
          </Paragraph>
          <Image alt={this.props.post.title} src={image} size='large' />
          <Paragraph align='start' size='large'>
            <div dangerouslySetInnerHTML={{ __html: this.props.post.content.split('</p>', 1)}} />
          </Paragraph>
        </Animate>
      </Section>
    )
  }
}

Block.propTypes = {
  post: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired
}
