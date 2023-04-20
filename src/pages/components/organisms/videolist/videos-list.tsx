"use client";
import type { RootState } from '@/store/store';
import { setVideosList } from '@/store/slices/videosListSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideosList = () => {
  //comp to render a list of videos from the account

  //grab the videos list
  const videosList = useSelector((state: RootState) => state.videosList.videosList)

  
  
  return (
    <>
      <h2 className="my-9 text-center text-4xl">動画リスト</h2>
      <ul className="flex flex-wrap w-full">
        {videosList.map((video) => {
            return (
            <li 
                key={video._id}
                className="overflow-hidden m-3 border border-transparent hover:border-slate-400 hover:shadow-md transition duration-300">
                    <img src={video.thumbnail || 'https://placehold.jp/200x108.png?text=Data'} />
                    <p>{video.name}</p>
            </li>)
        })}
      </ul>
    </>
  );
};

export default VideosList;
