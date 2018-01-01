import { Component } from 'react'
import TextTruncate from 'react-text-truncate'
import Link from 'next/link'
import Router from 'next/router'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'

import Date from '../../utils/helpers'

export default class Block extends Component {
  render () {
    this.image = process.env.BASE_URL + '/' + this.props.image
    this.authorUrl = '/blog/author/' + this.props.author.Username
    this.visibility = this.props.id == this.props.total ? undefined : 'scroll'

    return (
        <Section full={false} pad='medium' align='center' justify='center'>
            <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true} visible={this.visibility}>
                <Heading align='center'>
                    {this.props.title} 
                </Heading>
                <p>
                    By <a href={this.authorUrl} className='grommetux-anchor' onMouseEnter={() => {Router.prefetch(this.authorUrl)}}>{this.props.author.FirstName} {this.props.author.LastName}</a>
                    &nbsp;|&nbsp;
                    {Date(this.props.date)}
                </p>
                <Image alt={this.props.title} src={this.image} size='large' />
                <Paragraph align='start' size='large'>
                    <div dangerouslySetInnerHTML={{ __html: this.props.content.split('</p>', 1)}} />
                </Paragraph>
            </Animate>
        </Section>
    )
  }
}
