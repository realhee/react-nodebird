import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from "next/head";

const Profile = () => {
  const followingList = [
    { nickName: "홍길동" },
    { nickName: "김하니" },
    { nickName: "김민석" },
  ];
  const followerList = [
    { nickName: "홍길동" },
    { nickName: "김하니" },
    { nickName: "김민석" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="팔로잉 목록" data={followingList}></FollowList>
        <FollowList header="팔로워 목록" data={followerList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
