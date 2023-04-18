import Button from '../../atoms/Button'
import Image from 'next/image'
import { FC } from 'react'

interface VideoProps {
    isUrlVideoReady: boolean,
    videoTitle?: string,
    videoThumbnail?: string,
    videoStatus?: string,
    videoId?: string,
}

const urlVideo: FC<VideoProps> = ({
    isUrlVideoReady,
    videoTitle,
    videoThumbnail,
    videoStatus,
    videoId,

}) => {

    //code to show if the url video has been created and fetched
    const urlVideoReady = (
        (<div>
            <h3>{videoTitle}</h3>
            <Image 
                src={videoThumbnail ? videoThumbnail : 'https://placehold.jp/200x108.png?text=Data'} 
                alt="Something"
                width={300}
                height={150}
                />
            <p>{videoStatus}</p>
            <div className="flex justify-around w-2/3">
                {videoStatus === 'draft' && <Button>Render</Button>} 
                <Button>Check Video</Button>
                {videoStatus === 'ready' && <Button>Download</Button>}
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

export default urlVideo