import { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

export default class Post extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/post/' + props.id)
    const json = await res.json()
    return { title: json.title,
        slug: json.slug,
        author: json.slug,
        category: json.category,
        contentcategory: json.content,
        date: json.date }
  }

  render () {
    return (
      <div>
        <p>TBD {this.props.title} </p>
      </div>
    )
  }
}
