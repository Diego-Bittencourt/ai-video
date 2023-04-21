"use client";
import type { RootState } from '@/store/store';
import { setVideosList } from '@/store/slices/videosListSlice';
import api from '../../../../helpers/api/index'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import Badge from '../../atoms/Badge'
import {
    setIsLoading
} from '@/store/slices/authSlice'
import { setEditVideo } from '@/store/slices/editVideoSlice';

const VideosList = () => {
  //comp to render a list of videos from the account

  const dispatch = useDispatch()

  //grab the videos list
  const videosList = useSelector((state: RootState) => state.videosList.videosList)

  //grab the accessToken
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)

  const fetchVideoDetails = async(id: string) => {

    //turning loading on
    dispatch(setIsLoading(true))
    console.log(id)
    const videoDetails = await api.fetchVideo(`videos/${id}`, `Bearer ${accessToken}`)


    dispatch(setEditVideo(videoDetails))

    //turning loading off
    dispatch(setIsLoading(false))
  }
  
  
  return (
    <>
      <h2 className="my-9 text-center text-4xl">動画リスト</h2>
      <ul className="flex flex-wrap w-full justify-around">
        {videosList.map((video) => {
            return (
            <li 
                onClick={() => {fetchVideoDetails(video._id)}}
                key={video._id}
                className="overflow-hidden m-3 w-52 h-48 border border-transparent hover:border-slate-400 hover:shadow-md transition duration-300">
                    <Image src={video.thumbnail || 'https://placehold.jp/200x108.png?text=Data'} width={208} height={90} alt="video thumbnail"/>
                    <p>{video.name}</p>
                    <Badge status={video.status} >{video.status}</Badge>
            </li>)
        })}
      </ul>
    </>
  );
};

export default VideosList;
