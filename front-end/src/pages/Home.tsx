import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import BooksTable from "../components/BooksTable";
import BooksCard from "../components/BooksCard";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: Date;
  updatedAt: Date;
}

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555').then(response => {
      setBooks(response.data.data);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button onClick={() => setShowType('table')} className="px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600">Table</button>
        <button onClick={() => setShowType('card')} className="px-4 py-1 rounded-lg bg-sky-300 hover:bg-sky-600">Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books list</h1>
        <Link to={'/books/create'}>
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
      </div>
      {
        loading ? <Spinner/> : showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books}/>
      }
    </div>
  )
}

export default Home