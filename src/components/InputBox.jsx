import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { render } from "@testing-library/react";

export default function InputBox() {
  const [user] = useAuthState(auth);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    render.onload = (readEvent) => {
      setImageToPost;
    };
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="rounded-full hidden md:block"
          src={user.photoURL}
          width="40"
          height="40"
          alt={user.displayName}
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 w-10 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <button type="submit" hidden>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} alt="post" className="h-10 object-contain" />
            <p className="text-xs text-red-500"></p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base hidden md:block">
            Live Video
          </p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base hidden md:block">
            Photo/Video
          </p>
          <input
            ref={filePickerRef}
            type="file"
            onChange={addImageToPost}
            hidden
          />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base hidden md:block">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
}
