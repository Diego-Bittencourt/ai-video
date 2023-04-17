import Button from './atoms/Button'


interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {


    const handleCreate = () => {
        console.log('go to create')
    }

    const handleEdit = () => {
        console.log('go to edit')
    }

    return (
        <><header className=" w-full bg-zinc-700 text-white p-8 flex justify-between align-baseline">
<h1 className="p-1 lg:text-4xl sm:text-2xl">Livepass AI powered video creator</h1>
<div className="flex justify-around w-1/4 justify-self-end">
<Button onClick={handleCreate}>Create</Button>
<Button onClick={handleEdit}>Edit</Button>
</div>
</header><div className="space-y-40 p-20 min-h-screen">{children}</div></>
    
    )
}

export default Layout