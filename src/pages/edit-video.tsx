import Button from "./components/atoms/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import VideosList from "./components/organisms/videolist/videos-list";
import EditSlides from './components/organisms/editslides/edit-slides';

import {
  setIsLoading,
  setTokens,
} from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from './components/modals/Loading';

const EditVideo = () => {
 

  //setting the actions and selectors
  const isLoading = useSelector((state: RootState) => state.auth.isLoading)
  

  const [isLoadingLocal, setIsLoadingLocal] = useState(false)
  useEffect(() => {
    setIsLoadingLocal(isLoading)
  }, [isLoading])
  


  return (
    <>
    { isLoadingLocal && <Loading />}
    <VideosList />
    <div className="p-4 flex flex-wrap justify-center w-full mb-40">
      {<EditSlides />}

    </div>
      </>
  );
};

export default EditVideo;
