import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { Link } from "react-router-dom"
import { IBook } from "../pages/Home"

interface IBooks {
    books: IBook[];
}

const BooksTable = ({ books }: IBooks) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="rounded-md border border-slate-600">S No</th>
              <th className="rounded-md border border-slate-600">Title</th>
              <th className="rounded-md border border-slate-600 max-md:hidden">Author</th>
              <th className="rounded-md border border-slate-600 max-md:hidden">Publish year</th>
              <th className="rounded-md border border-slate-600">Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book, index) => 
                <tr key={book._id} className="h-8">
                  <td className="text-center rounded-md border border-slate-700">{index+1}</td>
                  <td className="text-center rounded-md border border-slate-700">{book.title}</td>
                  <td className="text-center rounded-md border border-slate-700 max-md:hidden">{book.author}</td>
                  <td className="text-center rounded-md border border-slate-700 max-md:hidden">{book.publishYear}</td>
                  <td className="text-center rounded-md border border-slate-700">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/show/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800"/>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600"/>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600"/>
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
  )
}

export default BooksTable