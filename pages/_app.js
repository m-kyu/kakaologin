import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
    <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
      integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx" crossorigin="anonymous"></Script>

    <Component {...pageProps} />
  </>
}
