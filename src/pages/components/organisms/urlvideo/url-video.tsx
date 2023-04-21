import api from '@/helpers/api'
import Button from '../../atoms/Button'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { setIsLoading } from '@/store/slices/authSlice'
import { useDispatch } from 'react-redux'


interface VideoProps {
    isUrlVideoReady: boolean,
    videoTitle?: string,
    videoThumbnail?: string,
    videoStatus?: string,
    videoId?: string,
}

const UrlVideo: FC<VideoProps> = ({
    isUrlVideoReady,
    videoTitle,
    videoThumbnail,
    videoStatus,
    videoId,

}) => {

    const dispatch = useDispatch()

    const [currentVideoStatus, setCurrentVideoStatus] = useState('Not ready')
    const [videoDownloadUrl, setVideoDownloadUrl] = useState('')

    const checkHandler = async () => {
        dispatch(setIsLoading(true))
        const { status, url } = await api.get(`${videoId}`)
        setCurrentVideoStatus(status)
        setVideoDownloadUrl(url)
        dispatch(setIsLoading(false))
    }


    const renderHandler = async () => {
        //handler to send a request to render the video

        const endpoint = `render/${videoId}`

        const rendering = await api.post(endpoint, {})

        checkHandler()
    }

    const downloadHandler = () => {
        fetch(videoDownloadUrl)
        .then((res) => res.blob())
        .then((blob) => {
          var file = window.URL.createObjectURL(blob)
          window.location.assign(file)
        })
        .catch(err => console.error(err))
    }

    //reassign the video status to the latest
    useEffect(() => {
        if (videoStatus) {
        setCurrentVideoStatus(videoStatus)
        } 
    }, [videoStatus])

    //code to show if the url video has been created and fetched
    const urlVideoReady = (
        (<div className='space-y-4'>
            <h3 className='text-center text-2xl'>{videoTitle}</h3>
            <Image 
                src={videoThumbnail ? videoThumbnail : 'https://placehold.jp/200x108.png?text=Data'} 
                alt="Something"
                width={300}
                height={150}
                className='m-auto'
                />
            <p className='text-center text-2xl'>{currentVideoStatus}</p>
            <div className="flex justify-around w-2/3 mx-auto">
                {currentVideoStatus === 'draft' && <Button onClick={renderHandler}>Render</Button>} 
                <Button onClick={checkHandler}>Check Video</Button>
                {currentVideoStatus === 'ready' && <Button onClick={downloadHandler}>Download</Button>}
            </div>
            </div>)
    )

    return (
        <>
        { isUrlVideoReady && urlVideoReady }
        { !isUrlVideoReady && <p>No Videos to show</p>}
        </>
        
    )
}

export default UrlVideo

