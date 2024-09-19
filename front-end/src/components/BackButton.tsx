import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
        <Link to={destination} className="w-fit rounded-lg px-4 py-1 text-white bg-sky-800">
            <BsArrowLeft className="text-2xl"/>
        </Link>
    </div>
  )
}

export default BackButton