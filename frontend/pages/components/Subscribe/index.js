/* Modified version from https://github.com/revolunet/react-mailchimp-subscribe */

import { Component } from "react";
import jsonp from "jsonp"
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class Subscribe extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    };
    this.actionURL = '//powerpiper.us17.list-manage.com/subscribe/post?u=0fffbdcc0fda19cf7460e0710&amp;id=61682d65ff';
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.actionURL) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, style, styles } = this.props
    const { status, msg } = this.state
    return (
      <div>
        <form action={action} method="post" className='grommetux-form grommetux-form--pad-large' noValidate>
          <div>
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              size="40"
              required={true}
              placeholder={messages.inputPlaceholder}
              className="grommetux-text-input grommetux-input"
            />
            <br />
            <br />
            <button
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
              className="grommetux-button"
            >
              {messages.btnLabel}
            </button>
          </div>
          <Paragraph align='center' size='medium' margin='small'>
            {status === "sending" && <p style={styles.sending} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
            {status === "success" && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success || msg }} />}
            {status === "error" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error || msg }} />}
          </Paragraph>
        </form>
      </div>
    )
  }
}

Subscribe.defaultProps = {
  messages: {
    inputPlaceholder: "Your email",
    btnLabel: "Subscribe",
    sending: "Subscribing...",
    success: "Thank you for subscribing!",
    error: "Oops, tou should enter your email...",
    inputPlaceholder: "yourEmail@mail.com"
  },
  styles: {
    sending: {color: 'auto', sifontSizeze: '1em'},
    success:  {color: 'green', fontSize: '1em'},
    error: {color: 'red', fontSize: '1em'},
    }
}

export default Subscribe;
