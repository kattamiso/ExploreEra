import RomeVideo from "../../../../public/Video/Rome in 4K.mp4"

const Trips = () => {
  return (
    <div className="w-[400px] md:w-[800px] lg:w-[1200px] mx-auto lg:pt-20" >
        <h2 className="text-4xl font-medium py-8">Watch Our Memorable Trips</h2>

        <div>
            <video src={RomeVideo} className="pt-10" muted controls></video>
        </div>
    </div>
  )
}

export default Trips