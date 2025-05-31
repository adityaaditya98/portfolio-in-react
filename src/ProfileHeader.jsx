import profileImg from "./assets/profilePhoto.png"
import resume from "./assets/resume.pdf"
function ProfileHeader(){
    return(
        <div className="flex flex-col md:flex-row border-2 border-sky-500 justify-center gap-4 p-4">
  {/* Grid Container */}
  <div className="md:basis-3/4 border-2 border-sky-500 flex justify-center">
    <div className=" w-full flex justify-center items-center border border-stone-900">
  <div className="w-full max-w-4xl grid grid-cols-3 gap-5 p-4 border border-stone-900 rounded-3xl">
    <div className="col-span-3 w-full text-center border border-stone-900 rounded-3xl font-bold text-2xl" style={{color:"red"}}><h1>Aditya Boddu</h1></div>
    <div className="col-span-2 w-full text-center border border-stone-900 rounded-3xl" style={{color:"red"}}><h4>Software Engenner</h4></div>
    <div className="w-full text-center border border-stone-900 rounded-3xl">05</div>
    <div className="w-full text-center border border-stone-900 rounded-3xl" style={{color:"red"}}>CV</div>
    <div className="w-full text-center border border-stone-900 rounded-3xl" style={{color:"red"}}>Cl</div>
    <div className="w-full text-center">
        <a href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
        >Resume</a>
    </div>
  </div>
</div>
  </div>

  {/* Image Container */}
  <div className="md:basis-2/4 border-2 border-sky-500 flex justify-center items-center p-4">
    <img src={profileImg} className="border border-stone-900 rounded-3xl max-w-full h-auto" />
  </div>
</div>


    )
}
export default ProfileHeader;