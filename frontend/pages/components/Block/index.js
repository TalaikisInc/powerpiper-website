import { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'

import Date from '../../utils/helpers'

export default class Block extends Component {
  render () {
    this.image = process.env.BASE_URL + '/' + this.props.post.image
    this.authorUrl = '/author/' + this.props.post.author_id.Username + '/0/'
    this.categoryUrl = '/category/' + this.props.post.category_id.Slug + '/0/'
    this.articleUrl = '/post/' + this.props.post.slug + '/'
    this.visibility = this.props.post.id == this.props.total ? undefined : 'scroll'

    return (
        <Section full={false} pad='medium' align='center' justify='center'>
            <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true} visible={this.visibility}>
                <Heading align='center'>
                    <a href={this.categoryUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(this.categoryUrl)}}>
                        {this.props.post.category_id.Title}
                    </a>  >> 
                    <a href={this.articleUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(this.articleUrl)}}>
                        {this.props.post.title} 
                    </a>
                </Heading>
                <p>
                    By <a 
                        href={this.authorUrl} 
                        className='grommetux-anchor' 
                        onMouseEnter={() => {Router.prefetch(this.authorUrl)}}>
                            {this.props.post.author_id.FirstName} {this.props.post.author_id.LastName}
                        </a>
                    &nbsp;|&nbsp;
                    {Date(this.props.post.date)}
                </p>
                <Image alt={this.props.post.title} src={this.image} size='large' />
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
    total: PropTypes.number.isRequired,
  }
  