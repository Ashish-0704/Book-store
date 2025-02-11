import { AiOutlineEdit } from 'react-icons/ai'
import { BiShow, BiUserCircle } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { IBook } from '../pages/Home'
import { useState } from 'react'
import BookModal from './BookModal'

interface Book {
    book: IBook;
}

const SingleBookCard = ({ book }: Book) => {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative m-4 px-4 py-2 rounded-lg hover:shadow-xl border-2 border-gray-500">
        <h2 className="absolute top-1 right-2 px-4 py-1 rounded-lg bg-red-300">{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-2xl text-red-300"/>
            <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-2xl text-red-300"/>
            <h2 className="my-1">{book.author}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <BiShow onClick={() => setShowModal(true)} className='text-3xl cursor-pointer hover:text-black text-blue-800'/>
            <Link to={`books/show/${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`books/edit/${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"/>
            </Link>
            <Link to={`books/delete/${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"/>
            </Link>
        </div>
        {
            showModal && (<BookModal book={book} onClose={() => setShowModal(false)}/>)
        }
    </div>
  )
}

export default SingleBookCard