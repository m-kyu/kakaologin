import axios from 'axios';
import { useRouter } from 'next/router';
import React, { use, useEffect } from 'react'

const Getfriends = () => {
    const router = useRouter();
    useEffect(() => {
        axios
            .get(`https://kapi.kakao.com/v1/api/talk/friends`, {
                headers: {
                    Authorization: `Bearer ${router.query.token}`,
                }, params: {
                    offset: 3,
                    limit: 3,
                    order: 'asc'
                }
            })
            .then((result) => {
                console.log('result ', result.data);
            })
            .catch((error) => {
                console.log('error ', error.response.data);
            });
    }, [])

    return (
        <div>getfriends</div>
    )
}

export default Getfriends