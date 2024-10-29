import React from "react";

const CardOfRequest = ({ c }) => {
  const { firstName, lastName, photoUrl, skills, gender, about, age } = c;
  return (
    <div className="m-4">
      <div className="flex justify-center items-center">
        <div className="flex justify-around items-center gap-8 border p-4 w-1/3">
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
        </div>
      </div>
    </div>
  );
};

export default CardOfRequest;
