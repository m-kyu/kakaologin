// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  let { query } = req;

  let data2 = await axios.get({
    url: "https://kapi.kakao.com/v1/api/talk/friends",
    headers: {
      Authorization: `Bearer ${query.token}`,
    }
  });
  console.log(data2)

  res.status(200).send('sdfsfd')
}
