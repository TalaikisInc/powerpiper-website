import { Component } from 'react'
import Session from '../Session'

export default class Page extends Component {
  static async getInitialProps({ req }) {
    return {
      session: await Session.getSession({ req }),
      lang: 'en'
    }
  }
}

