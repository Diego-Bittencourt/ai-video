import Button from "./components/atoms/Button";

const CreateVideo = () => {
  return (
    <form
      onSubmit="submitHandler"
      className="lg:w-2/3 w-full p-6 space-y-8 mx-auto"
    >
      <h2 className="text-4xl text-center">動画作成</h2>
      <div className="flex justify-around">
        <Button onClick="setUrl">URL</Button>
        <Button onClick="setPdf">PDF</Button>
      </div>
      <div className="space-y-6">
        <label
          for="url_input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          入力
        </label>
        <input
          type="text"
          className="bg-gray-200 border-slate-900 border-2 w-full rounded-lg p-1 mb-6"
        />
        <Button onClick="fetchCreateVideoUrl" className="w-full">
          作成
        </Button>
      </div>
    </form>
  )
}

export default CreateVideo
