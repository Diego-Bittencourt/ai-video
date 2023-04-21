'on client'

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import Image from 'next/image'
import Button from '../../atoms/Button'
import { setSlide, setEditSlides } from '../../../../store/slices/editVideoSlice.ts'
import { setIsLoading } from '../../../../store/slices/authSlice.ts'
import SlideEditor from '../../molecules/slide-editor'
import api from '../../../../helpers/api'

const EditSlides = () => {
    //component to hold the slides list and the input for the speech

    const dispatch = useDispatch()

    //grab the currently chosen video info
    const video = useSelector((state: RootState) => state.editVideo.video)

    const updateVideo = async (videoData) => {
        let newVideo = JSON.parse(JSON.stringify(video))
        newVideo.slides = videoData
        dispatch(setIsLoading(true))
        const videoId = `${video._id}`
        const updatedVideo = await api.patch(videoId, newVideo)
        dispatch(setIsLoading(false))
        console.log(updatedVideo)
        console.log("video na store", video)
        
        // fetch(updatedVideo.url)
        // .then((res) => res.blob())
        // .then((blob) => {
        //   var file = window.URL.createObjectURL(blob)
        //   window.location.assign(file)
        // })
        // .catch(err => console.error(err))
    }


    const updateSlideHandler = (id, speech) => {

        const index = video.slides.findIndex(e => e.id === id)
        //console.log(index, id, speech)
        //console.log(video.slides[index].speech)
        let slides = JSON.parse(JSON.stringify(video.slides))
        slides[index].speech = speech
        console.log("arhhhh", slides)
        dispatch(setEditSlides(slides))
        //console.log(video.slides[index].speech)
        updateVideo(slides)


    }

    return (
        <>
        {video.slides?.map((oneSlide) => {
            
            return (
                <SlideEditor slide={oneSlide} onUpdateSlide={updateSlideHandler} key={oneSlide.id}/>
            //   <div className="m-3" key={slide.id}>
            //     <Image
            //       src={
            //         slide.thumbnail
            //           ? slide.thumbnail
            //           : "https://placehold.jp/200x108.png?text=Draft"
            //       }
            //       alt=""
            //       width={400}
            //       height={150}
            //     />
            //     <textarea
            //       rows={8}
            //       className="border h-auto p-4 w-full rounded-md my-5"
            //       defaultValue={slide.speech}
            //     ></textarea>
            //     <Button onClick={() => updateSlideHandler(slide.id)}>Update</Button>
            //   </div>
            );
          })}
         
          </>
    )

}

export default EditSlides