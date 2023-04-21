import Image from 'next/image'
import Button from '../atoms/Button'
import { useState } from 'react'

const SlideEditor = ( props ) => {

    //console.log(props)

    const [slideSpeech, setSlideSpeech] = useState(props.slide.speech)


    return (
        <div className="m-3">
                <Image
                  src={
                    props.slide.thumbnail
                      ? props.slide.thumbnail
                      : "https://placehold.jp/200x108.png?text=Draft"
                  }
                  alt=""
                  width={400}
                  height={150}
                />
                <textarea
                  rows={8}
                  className="border h-auto p-4 w-full rounded-md my-5"
                  defaultValue={props.slide.speech}
                  onChange={e => setSlideSpeech(e.target.value)}
                ></textarea>
                <Button onClick={() => props.onUpdateSlide(props.slide.id, slideSpeech)}>Update</Button>
              </div>
    )
}

export default SlideEditor