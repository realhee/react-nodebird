import React from 'react'; // next.js에서는 이 구문 필요 없음
// pages 폴더는 꼭 이름이 pages여야 하고 하위 페이지들은 코드 스플리팅된 컴포넌트로 만들어준다. 
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);
    return (
    <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
    )
};

export default Home;