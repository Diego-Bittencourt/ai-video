import Button from "./components/atoms/Button";
import { useState } from "react";
import api from '../helpers/api/index'

const CreateVideo = () => {

  //user input
  const [urlInput, setUrlInput] = useState('')

  //templateId is being hardcoded
  const [templateId, setTemplateId] = useState('641bc0e8e06dcf0aef67bf36')

  const submitHandler = (e: Event) => {
    e.preventDefault()
    console.log("from code", process.env.NEXT_PUBLIC_BASE_URL)
    //prepare the payload to the fetch
    const payload = {
      from: urlInput,
      waitForVideo: true,
      templateId: templateId
    }
    api.post('generate/url', payload)
    //reset the input
    setUrlInput('')
  }

  return (
    <form onSubmit={submitHandler} className="lg:w-2/3 w-full p-6 space-y-8 mx-auto">
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
          入力
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
  );
};

export default CreateVideo;
