import BlogsData from "./BlogsData"

const Blogs = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto top-80">
        <h2 className="mb-12 text-4xl font-medium">Blogs</h2>
    <div className="grid grid-cols-3 gap-4 mt-4">
    {BlogsData.map((blog, index) => (
        <div key={index} className="flex flex-col ">
            <img src={blog.Image} alt={blog.title} className="max-w-xs cursor-pointer transition-transform duration-400 hover:scale-105" />
            <h3 className="font-medium">{blog.title}</h3>
        </div>
     ))}
   </div>
   </div>
  )
}

export default Blogs