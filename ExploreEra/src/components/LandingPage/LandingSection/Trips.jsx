import Video from "../../../../public/Video/Rome in 4K.mp4"

const Trips = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-16">
        <h2 className="text-4xl font-medium py-8">Watch Our Memorable Trips</h2>

        <div>
            <video src={Video} className="pt-10" muted controls></video>
        </div>
    </div>
  )
}

export default Trips