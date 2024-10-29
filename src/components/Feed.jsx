import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./userCard";

const Feed = () => {
  const [feedData, setFeedData] = useState(null);
  const getFeedData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      response.data;
      setFeedData(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getFeedData();
  }, []);
  return (
    feedData && (
      <div className="flex justify-center items-center mt-20">
        <UserCard data={feedData[0]} />
      </div>
    )
  );
};

export default Feed;
