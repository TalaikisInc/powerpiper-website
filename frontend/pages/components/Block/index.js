import { Component } from 'react'
import TextTruncate from 'react-text-truncate'
import Link from 'next/link'
import Anchor from 'grommet/components/Anchor'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import Animate from 'grommet/components/Animate'

export default class Block extends Component {
  render () {
    this.image = process.env.BASE_URL + '/' + this.props.image
    this.authorUrl = '/blog/author/' + this.props.author.Username
    return (
        <Section full={false} pad='medium' align='center' justify='center'>
            <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true}>
                <Heading align='center'>
                    {this.props.title} 
                </Heading>
                by <Anchor href={this.authorUrl}>{this.props.author.FirstName} {this.props.author.LastName}</Anchor>
                <Image align='top' alt={this.props.title} src={this.image} size='large' />
                <Paragraph align='start' align='large'>
                    <div dangerouslySetInnerHTML={{ __html: this.props.content.split('</p>', 1)}} />
                </Paragraph>
            </Animate>
        </Section>
    )
  }
}
