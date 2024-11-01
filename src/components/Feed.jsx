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
  return (
    feedData && (
      <div className="flex relative justify-center items-center mt-20">
        {feedData.map((data) => {
          return <UserCard key={data._id} data={data} />;
        })}
      </div>
    )
  );
};

export default Feed;
