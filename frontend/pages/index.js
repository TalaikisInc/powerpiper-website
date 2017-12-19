import { Component } from 'react'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Animate from 'grommet/components/Animate'

import Layout from './layout'
import _Header from './components/Header'
import _Footer from './components/Footer'
import Subscribe from './components/Subscribe'

class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: 0
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(selected) {
    this.setState({
      ...this.state,
      selected
    });
  }
  
  render () {
    this.title = 'Decentralized Energy Marketplace'
    this.description = 'Decentralized Energy Marketplace'
    this.image = ''

    return (
      <Layout>
        {_Header({title: this.title, description: this. description, image: this.image})}
        <Article onSelect={this._onSelect} scrollStep={true} controls={true} selected={this.state.selected}>
          <Section full={true} pad='none' align='center' justify='center'>
            <Subscribe />
          </Section>
          <Section full={true} pad='none' colorIndex='ascent-1' colorIndex='neutral-1'>
          <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true}>
            <Heading align='center' justify='center'>
            Testing theme color
            </Heading>
          </Animate>
          </Section>
          <Section full={true} pad='none'  colorIndex='neutral-1'>
          <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true}>
            <Heading>
            Section3
            </Heading>
          </Animate>
          </Section>
          <Section full={true} pad='none' colorIndex='ascent-1'>
            Section4
          </Section>
        </Article>
        {_Footer({title: this.siteTitle, scrollStep: false, controls: false})}
      </Layout>
    )
  }
}

export default Index;
