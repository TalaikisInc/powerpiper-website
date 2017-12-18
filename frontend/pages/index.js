import { Component } from 'react';
import Head from 'next/head'
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';

import _Header from './components/Header';
import Meta from './components/Meta';
import Title from './components/Title';
import _Footer from './components/Footer';
import GA from './components/GA';
import Subscribe from './components/Subscribe';

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
    this.title = 'Decentralized Energy Marketplace';
    this.description = 'Decentralized Energy Marketplace';
    this.siteTitle = 'PowerPiper';
    this.image = '';
    this.baseURL = process.env.BASE_URL || '';
    this.author = 'PowerPiper';

    return (
      <div>
        <Head>
          <link rel='canonical' href={this.baseURL} />
          <Title title={this.title} siteTitle={this.siteTitle} />
          <link href='//fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css' />
          <link href='//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css' rel='stylesheet' type='text/css' />
          <script src="//cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
          <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
          <link href='assets/css/style.css' rel='"stylesheet' media='screen' />
          <Meta title={this.title} siteTitle={this.siteTitle} image={this.image} baseURL={this.baseURL} author={this.author} description={this.props.description }/>
        </Head>
        <_Header />
        <Article onSelect={this._onSelect} scrollStep={true} controls={true} selected={this.state.selected}>
          <Section full={true} pad='none' align='center' justify='center'>
            <Subscribe />
          </Section>
          <Section full={true} pad='none' colorIndex='accent-1'>
          <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true}>
            <Heading align='center' justify='center'>
            Section2
            </Heading>
          </Animate>
          </Section>
          <Section full={true} pad='none'>
          <Animate enter={{'animation': 'slide-up', 'duration': 1000, 'delay': 0}} keep={true}>
            <Heading>
            Section3
            </Heading>
          </Animate>
          </Section>
          <Section full={true} pad='none' colorIndex='accent-2'>
            Section4
          </Section>
        </Article>
        <_Footer title={this.siteTitle} scrollStep={false} controls={false} />
        <GA log='pageview' />
      </div>
    )
  }
}

export default Index;
