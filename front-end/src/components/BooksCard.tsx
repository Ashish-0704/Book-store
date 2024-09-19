import { IBook } from "../pages/Home";
import SingleBookCard from "./SingleBookCard";

interface IBooks {
    books: IBook[];
}

const BooksCard = ({ books }: IBooks) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            books.map((item) => ( <SingleBookCard key={item._id} book={item}/> ))
        }
    </div>
  )
}

export default BooksCard