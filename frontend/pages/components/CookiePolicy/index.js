import CookieBanner, { Cookies } from 'react-cookie-banner';

const cookies = new Cookies()
var cookie = cookies.get('accepted');

function CookiePolicy(ifExists) {
    if (!cookie) {
        return (
            <div>
                <CookieBanner
                styles={{
                    banner: { backgroundColor: 'rgba(60, 60, 60, 0.8)' },
                    message: { fontWeight: 400 }
                  }}
                message="This site uses cookies. If you continue to use this site we will assume that you agreed to it."
                onAccept={() => {cookie.set('accepted', 'yes')}} />
            </div>
        );
    } else {
        return (
            <span></span>
        )
    }
}

export default CookiePolicy;
