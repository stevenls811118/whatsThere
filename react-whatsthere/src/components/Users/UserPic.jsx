import { useEffect } from "react";

export default function UserPic({ userPicture }) {
  useEffect(() => {
    console.log("userPicture changed:", userPicture);
  }, [userPicture]);

  return (
    <div>
      {userPicture && userPicture.picture ? (
        <img
          src={userPicture.picture}
          alt="user"
          className="rounded-full w-20 h-20"
        />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          className="rounded-full w-20 h-20"
          alt="user"
        />
      )}
    </div>
  );
}
