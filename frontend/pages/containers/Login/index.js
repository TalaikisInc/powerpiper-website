import SocialButton from '../compoennts/SocialButton'

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

const handleSocialLoginSuccess = (msg) => {
    console.error(msg)   
}

const handleSocialLogoutSuccess = (msg) => {
    console.error(msg)   
}

const handleSocialLogoutFailure = (err) => {
    console.error(err)
  }

class Login extends Component {
    render () {
        return (
            <div>
                <SocialButton 
                    provider='facebook' 
                    appId='YOUR_APP_ID' 
                    onLoginSuccess={handleSocialLogin} 
                    onLoginFailure={handleSocialLoginFailure}
                    onLoginSuccess={handleSocialLoginSuccess}
                    onLogoutFailure={handleSocialLogoutFailure}
                    onLogoutSuccess={handleSocialLogoutSuccess}>
                        Login with Facebook
                </SocialButton>
            </div>
        )
    }
}

export default Login;
