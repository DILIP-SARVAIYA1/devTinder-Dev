import React from "react";

const UserCard = ({ data }) => {
  const { firstName, lastName, photoUrl, skills, gender, about } = data;

  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl">
      <img src={photoUrl} alt="Shoes" className="max-h-60" />
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{gender}</p>
        <p>{skills}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4 gap-10">
          <button className="btn btn-primary">Ignored</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
