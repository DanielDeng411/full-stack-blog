import IKImage from "../components/Image"
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold"> 
            Dive into stories, ideas, and insights from creators, developers, and curious minds.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link >John Doe</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Whether you're here to learn something new, stay inspired, or just enjoy a good read you've come to the right place.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <IKImage src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-jutify">
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
          <p>
            In a world that moves faster than ever, it's easy to lose track of 
            the quiet moments that inspire real thought. Between scrolling 
            timelines and crowded inboxes, we often forget the joy 
            of slowing down and diving deep into a single idea. That’s what this space 
            is for — a digital pause, a place to breathe and explore everything from 
            design quirks to overlooked lines of code, from everyday stories to 
            unexpected perspectives. Whether you're here to learn something new, 
            reflect on a familiar topic, or simply enjoy a well-crafted post, 
            we’re glad you stopped by.
          </p>
        </div>
        {/* menu */}
        <div className="px=4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex  flex-col gap-4">
            <div className="flex items-center gap-8">
              <IKImage 
                src="userImg.jpeg" 
                className="2-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Dive into stories, ideas, and insights from creators, developers, and curious minds.</p>
            <div className="flex gap-2">
              <Link>
                <IKImage src="facebook.svg" className="w-6 h-6" w="24" h="24" />
              </Link>
              <Link>
                <IKImage src="instagram.svg" className="w-6 h-6" w="24" h="24" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default SinglePostPage