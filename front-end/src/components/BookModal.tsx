import { AiOutlineClose } from "react-icons/ai";
import { IBook } from "../pages/Home"
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

interface ModalProps {
    book: IBook;
    onClose: () => void;
} 
const BookModal = ({ book, onClose }: ModalProps) => {
  return (
    <div onClick={onClose} className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 z-50 bg-opacity-60 bg-black">
        <div className="relative flex flex-col h-[400px] w-[600px] max-w-full p-4 rounded-xl bg-white">
            <AiOutlineClose onClick={onClose} className="absolute top-6 right-6 text-3xl cursor-pointer text-red-600" />
            <h2 className="w-fit px-4 py-1 rounded-lg bg-red-300">{book.publishYear}</h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-2xl text-red-300"/>
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-2xl text-red-300"/>
                <h2 className="my-1">{book.author}</h2>
            </div>
            <p className="mt-4">Anything you want to show</p>
            <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Maiores voluptatibus alias distinctio aspernatur laboriosam accusantium natus animi asperiores. 
                Doloremque quibusdam ratione in voluptatem illum esse, ipsam alias repudiandae pariatur eos.
            </p>
        </div>
    </div>
  )
}

export default BookModal