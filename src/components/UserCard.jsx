import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeedData } from "../utils/feedDataSlice";

const UserCard = ({ data }) => {
  const { _id, firstName, lastName, photoUrl, skills, gender, about } = data;
  const dispatch = useDispatch();

  const updateRequestStatus = async (status, id) => {
    await axios.post(
      `${BASE_URL}/request/${status}/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(removeFeedData(id));
  };

  return (
    <div className=" card card-compact bg-base-300 w-96 shadow-xl">
      <img src={photoUrl} alt="Photo" className="max-h-72 object-cover" />
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{gender}</p>
        <p>{skills}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => updateRequestStatus("ignored", _id)}
          >
            Ignored
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => updateRequestStatus("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
