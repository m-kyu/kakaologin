import React from 'react'

const Login = () => {

    const REST_API_KEY = "427f018c9f6200c5ff6a044a9794e936";
    // const REDIRECT_URI = "http://localhost:3000/auth/loginok";
    const REDIRECT_URI = "https://port-0-kakaologin-3a9t2ble82e01s.sel3.cloudtype.app/auth/loginok";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=friends,talk_message`;



    return (
        <>
            <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </>
    )
}

export default Login