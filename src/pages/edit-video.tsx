import Button from "./components/atoms/Button";
import Image from "next/image";
import { useState } from "react";
import VideosList from "./components/organisms/videolist/videos-list";

const EditVideo = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      thumbnail: "https://placehold.jp/200x108.png?text=Data",
    },
    {
      id: 2,
      thumbnail: "https://placehold.jp/200x108.png?text=Data",
    },
    {
      id: 3,
      thumbnail: "https://placehold.jp/200x108.png?text=Data",
    },
    {
      id: 4,
      thumbnail: "https://placehold.jp/200x108.png?text=Data",
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]);

  return (
    <>
    <VideosList />
    <div className="p-4 flex flex-wrap justify-center w-full mb-40">
      {dummyData.map((slide) => {
        return (
          <div className="m-3" key={slide.id}>
            <Image
              src={
                slide.thumbnail
                  ? slide.thumbnail
                  : "https://placehold.jp/200x108.png?text=Draft"
              }
              alt=""
              width={400}
              height={150}
            />
            <textarea
              rows={8}
              className="border h-auto p-4 w-full rounded-md"
            ></textarea>
          </div>
        );
      })}

      <Button classesName={'w-2/3'}>Update</Button>
    </div>
      </>
  );
};

export default EditVideo;
