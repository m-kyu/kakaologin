import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Token = () => {
    const router = useRouter();

    const REST_API_KEY = "427f018c9f6200c5ff6a044a9794e936";
    const REDIRECT_URI = "http://localhost:3000/auth/loginok";

    let tokenBody = {
        grant_type: "authorization_code",
        client_id: "427f018c9f6200c5ff6a044a9794e936", // 내 RestAPIKey 를 박습니다.
        redirect_uri: 'http://localhost:3000/oauth', // 인가코드 받을때와 동일한 uri 사용
        code: ''
    };

    function getTokenQueryString(tokenBody) {
        return Object.keys(tokenBody)
            .map(k => encodeURIComponent(k) + "=" + encodeURI(tokenBody[k]))
            .join("&");
    }

    let token = {};
    useEffect(() => {
        axios
            .post(
                `https://kauth.kakao.com/oauth/token`,
                getTokenQueryString(tokenBody),
                {
                    Headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((result) => {
                token = result.data;
                router.push({
                    pathname: "/getfriends",
                    query: { token }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div>token</div>
    )
}

export default Token