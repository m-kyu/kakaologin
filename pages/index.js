import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  const router = useRouter();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      console.log(router.query.token)

      let data2 = await axios.get({
        url: "https://kapi.kakao.com/v1/api/talk/friends",
        headers: {
          'Authorization': `Bearer ${router.query.token}`,
        }
      });

      console.log(data2)

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getProfile();

    // friends();
  }, []);

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>


    </div>
  );
};

export default Profile;