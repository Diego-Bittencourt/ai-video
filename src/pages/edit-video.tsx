import Button from "./components/atoms/Button";
import Image from "next/image";
import { useState } from "react";
import VideosList from "./components/organisms/videolist/videos-list";
import EditSlides from './components/organisms/editslides/edit-slides';


const EditVideo = () => {
 

  return (
    <>
    <VideosList />
    <div className="p-4 flex flex-wrap justify-center w-full mb-40">
      {<EditSlides />}

    </div>
      </>
  );
};

export default EditVideo;
