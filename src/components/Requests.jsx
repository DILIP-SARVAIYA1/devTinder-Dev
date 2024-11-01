import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const updateRequestStatus = async (status, id) => {
    await axios.post(
      `${BASE_URL}/request/review/${status}/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(removeRequest(id));
  };
  const fetchRequests = async () => {
    try {
      const response = await axios(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequest(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }
  if (requests.length === 0) {
    return (
      <div className="text-center font-bold text-2xl m-4 underline">
        No Requests Found
      </div>
    );
  }
  return (
    <div>
      {requests &&
        requests.map((c) => {
          const { firstName, lastName, photoUrl, skills, gender, about, age } =
            c.fromUserId;

          return (
            <div key={c._id} className="m-4">
              <div className="flex justify-center items-center">
                <div className="flex justify-around items-center gap-8 border p-4 w-1/2">
                  <div>
                    <img
                      className="rounded-full w-16 h-16"
                      src={photoUrl}
                      alt="User Photo"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{firstName + " " + lastName}</h3>
                    {gender && age && <p>{gender + " " + age}</p>}
                    {about && <p>{about}</p>}
                    {skills && <p>{skills}</p>}
                  </div>
                  <div className="flex gap-5">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        updateRequestStatus("rejected", tc._id.toString())
                      }
                    >
                      Rejected
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        updateRequestStatus("accepted", c._id.toString())
                      }
                    >
                      Accepted
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Requests;
