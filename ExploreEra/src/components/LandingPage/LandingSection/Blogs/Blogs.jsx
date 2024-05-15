import BlogsData from "./BlogsData"

const Blogs = () => {
  return (
    <div className="sm:w-[300px] md:w-[700px] lg:w-[1200px] lg:h-[300px] mx-auto flex flex-col items-center lg:mb-28">
        <h2 className=" text-4xl font-medium">Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {BlogsData.map((blog, index) => (
        <div key={index} className="flex flex-col">
            <img src={blog.Image} alt={blog.title} className="w-[400px] cursor-pointer transition-transform duration-400 hover:scale-105" />
            <h3 className="font-bold text-xl mt-5 mb-5">{blog.title}</h3>
        </div>
     ))}
   </div>
   </div>
  )
}

export default Blogs