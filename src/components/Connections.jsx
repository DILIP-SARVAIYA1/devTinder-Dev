import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import CardOfRequest from "./CardOfRequest";
// import CardOfRequest from "./CardOfRequest";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(response.data.data));
    } catch (error) {
      console.error("Failed to fetch connections:", error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return (
      <div className="text-center font-bold text-2xl mt-44 underline">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (connections.length === 0) {
    return (
      <div className="text-center font-bold text-2xl m-4 underline">
        No Connections Found
      </div>
    );
  }

  return (
    connections && (
      <div>
        <div className="text-center font-bold text-2xl m-4 underline">
          My Connections
        </div>
        <div>
          {connections.map((c) => {
            return <CardOfRequest key={c._id} c={c} />;
          })}
        </div>
      </div>
    )
  );
};

export default Connections;
