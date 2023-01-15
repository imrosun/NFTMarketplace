import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../images";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import { Loader } from "../../components/componentsindex";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
  nfts,
  myNFTS,
}) => {
  const collectiablesArray = [
    {
      background: images.creatorbackground1,
      image: images.nft_image_1,
    },
    {
      background: images.creatorbackground2,
      image: images.nft_image_2,
    },
    {
      background: images.creatorbackground3,
      image: images.nft_image_3,
    },
    {
      background: images.creatorbackground4,
      image: images.nft_image_1,
    },
    {
      background: images.creatorbackground5,
      image: images.nft_image_2,
    },
    {
      background: images.creatorbackground6,
      image: images.nft_image_3,
    },
  ];

  const createdArray = [
   {
      background: images.creatorbackground1,
      image: images.user1,
    },
    {
      background: images.creatorbackground2,
      image: images.user2,
    },
    {
      background: images.creatorbackground3,
      image: images.user3,
    },
    {
      background: images.creatorbackground4,
      image: images.user4,
    },
    {
      background: images.creatorbackground5,
      image: images.user5,
    },
    {
      background: images.creatorbackground6,
      image: images.user6,
    },
  ];

  const likeArray = [
    {
      background: images.creatorbackground1,
      image: images.user1,
    },
    {
      background: images.creatorbackground2,
      image: images.user2,
    },
    {
      background: images.creatorbackground3,
      image: images.user3,
    },
    {
      background: images.creatorbackground4,
      image: images.user4,
    },
    {
      background: images.creatorbackground5,
      image: images.user5,
    },
    {
      background: images.creatorbackground6,
      image: images.user6,
    },
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
