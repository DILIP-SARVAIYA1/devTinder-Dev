import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import UserCard from "./userCard";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  // Initialize state with empty strings to avoid null issues
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender);
  const [skills, setSkills] = useState(user?.skills);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [showTost, setShowToast] = useState(false);

  const editProfileData = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          gender,
          skills,
          about,
          photoUrl,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(response?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to update profile:", error.message);
    }
  };

  return (
    <div className="flex justify-center m-4">
      <div className="max-w-lg m-4">
        <div className="text-center font-bold text-xl mx-4">Edit Profile</div>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="Photo URL"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input
            type="text"
            className="grow"
            placeholder="About"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>
        <button
          className="btn btn-neutral btn-wide my-4"
          onClick={editProfileData}
        >
          Update Profile
        </button>
      </div>
      <div>
        <UserCard
          data={{ firstName, lastName, gender, skills, about, photoUrl }}
        />
      </div>

      {showTost && (
        <div className="toast toast-top toast-center mt-10">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
