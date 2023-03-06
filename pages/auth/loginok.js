import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { Router, useRouter } from "next/router";

const Loginok = () => {
    const REST_API_KEY = "427f018c9f6200c5ff6a044a9794e936";
    const REDIRECT_URI = "http://localhost:3000/auth/loginok";
    const CLIENT_SECRET = "anus13U8dETXGqWQg14LrjDUeHGYA54n";
    const router = useRouter();

    const getToken = async () => {
        const code = new URL(window.location.href).searchParams.get("code");

        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });

        try {
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );

            // Kakao Javascript SDK 초기화
            window.Kakao.init(REST_API_KEY);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            router.push({
                pathname: '/',
                query: { token: res.data.access_token }
            })
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return null;
};

export default Loginok;