'use client'

import Button from "./components/atoms/Button";
import { useEffect, useState } from "react";
import api from "../helpers/api/index";
import UrlVideo from "./components/organisms/urlvideo/url-video";
import type { RootState } from "../store/store";
import {
  setIsLoading,
  setTokens,
} from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";

import { Portal } from './components/atoms/Portal'
import Loading from './components/modals/Loading';

const CreateVideo = () => {

  //setting the actions and selectors
  const isLoading = useSelector((state: RootState) => state.auth.isLoading)
  
  const dispatch = useDispatch()

  //create the login function
  const login = async () => {

    //set loading
    dispatch(setIsLoading(true))

    //create the credentials object
    const credentials = {
      email: process.env.NEXT_PUBLIC_LOGIN_EMAIL,
      password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD
    }

    //fetching the data from the server
    const response = await api.login('auth/login', credentials)

    //sending the tokens to the store
    dispatch(setTokens(response))

    //set no loading
    dispatch(setIsLoading(false))
  };

  //code to login when opened at the first time
  useEffect(() => {
    login()
  }, []);

  //user input
  const [urlInput, setUrlInput] = useState("");

  //templateId is being hardcoded
  const [templateId, setTemplateId] = useState("641bc0e8e06dcf0aef67bf36");

  //storing the url video in a state for a while
  const [urlVideo, setUrlVideo] = useState(null);

  //control the video status
  const [isUrlVideoReady, setIsUrlVideoReady] = useState(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("from code", process.env.NEXT_PUBLIC_BASE_URL);
    //prepare the payload to the fetch
    const payload = {
      from: urlInput,
      waitForVideo: true,
      templateId: templateId,
    };

    try {
      //fetch to create the video and return the video info
      const video = await api.post("generate/url", payload);
      setUrlVideo(video);
      setIsUrlVideoReady(true);
    } catch (err) {
      console.error(err);
    }

    //reset the input
    setUrlInput("");
  };

  

  return (
    <>
    { isLoading ? <Portal selector="#message"><Loading /></Portal> : null}
      <form
        onSubmit={submitHandler}
        className="lg:w-2/3 w-full p-6 space-y-8 mx-auto"
      >
        <h2 className="text-4xl text-center">動画作成</h2>
        <div className="flex justify-around">
          <Button>URL</Button>
          <Button>PDF</Button>
        </div>
        <div className="space-y-6">
          <label
            htmlFor="url_input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            入力 {isLoading ? 'loading' : 'nope'}
          </label>
          <input
            type="text"
            className="bg-gray-200 border-slate-900 border-2 w-full rounded-lg p-1 mb-6"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <Button classesName="w-full">作成</Button>
        </div>
      </form>
      <UrlVideo
        isUrlVideoReady={isUrlVideoReady}
        videoTitle={(urlVideo as any)?.name}
        videoThumbnail={(urlVideo as any)?.thumbnail}
        videoStatus={(urlVideo as any)?.status}
        videoId={(urlVideo as any)?.id}
      />
    </>
  );
};

export default CreateVideo;
