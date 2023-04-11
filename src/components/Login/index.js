import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/home')
  }

  onLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login With Sample Cred
        </button>
      </div>
    )
  }
}

export default Login
