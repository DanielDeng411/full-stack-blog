import IKImage from "./Image"

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="">
            <IKImage src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className="font-medium">John Doe</span>
            <span className="text-sm text-gray-500 ml-2">2 hours ago</span>
        </div>
        <div className="mt-4">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </div>
  )
}

export default Comment