import IKImage from "./Image"
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="mr-4 md:hidden xl:block xl:w-1/3">
            <IKImage src="postImg.jpeg" className="w-full rounded-2xl object-cover" w="735" />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
                Dive into stories, ideas, and insights from creators, developers, and curious minds.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-800">John Doe</Link>
                <span>on</span>
                <Link className="text-blue-800">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
            Whether you're here to learn something new, stay inspired, or just enjoy a good read you've come to the right place
            </p>
            <Link to="/test" className="underline text-blue-800">Read More</Link>
        </div>

    </div>
  )
}

export default PostListItem