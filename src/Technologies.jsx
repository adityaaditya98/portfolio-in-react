import { BiLogoPostgresql } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5, FaJava, FaNode } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiNestjs, SiSpringboot } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Technologies(){
    return (
        <div className="pb-24">
        <h2 className="my-20 text-center text-4xl"> Technologies</h2>
<div className="flex flex-wrap items-center justify-center gap-6 p-4">
  {/* Frontend */}
  <div className="p-4">
    <FaHtml5 className="text-7xl" color="red" />
  </div>
  <div className="p-4">
    <IoLogoCss3 className="text-7xl" color="blue" />
  </div>
  <div className="p-4">
    <FaJsSquare className="text-7xl" color="#f0dc54" />
  </div>
<div className="p-4">
    <RiReactjsLine className="text-7xl" color="#66dbfb" />
  </div>
  {/* Backend */}
    <div className="p-4">
    <FaJava className="text-7xl" color="red" />
  </div>
  <div className="p-4">
    <SiSpringboot className="text-7xl" color="green" />
  </div>
  <div className="p-4">
    <FaNode className="text-7xl" color="#7bb169" />
  </div>
  <div className="p-4">
    <SiNestjs className="text-7xl" color="#e0234e" />
  </div>

  {/* Database */}
  <div className="p-4">
    <SiMysql className="text-7xl" color="#08668e" />
  </div>
  <div className="p-4">
    <BiLogoPostgresql className="text-7xl" color="blue" />
  </div>
</div>


        </div>
    )
}
export default Technologies;