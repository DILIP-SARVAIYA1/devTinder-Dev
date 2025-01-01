import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeedData } from "../utils/feedDataSlice";

const Feed = () => {
  const feedData = useSelector((state) => state.feedData);
  const dispatch = useDispatch();
  const getFeedData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeedData(response.data));
    } catch (error) {}
  };
  useEffect(() => {
    getFeedData();
  }, []);
  if (!feedData) {
    return (
      <div className="text-center font-bold text-2xl mt-44 underline">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (feedData.length === 0)
    return (
      <div className="text-center font-bold text-2xl m-4 underline">
        No new user available
      </div>
    );
  return (
    feedData && (
      <div className="flex justify-center mt-10">
        <UserCard data={feedData[0]} />;
      </div>
    )
  );
};

export default Feed;
