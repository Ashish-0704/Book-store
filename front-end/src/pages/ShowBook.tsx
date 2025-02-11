import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "./Home";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/${id}`).then(response => {
      setBook(response.data);
      setLoading(false);
    }).catch((error: any) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Show book</h1>
      {
        loading ? <Spinner/> : 
        <div className="flex flex-col w-fit p-4 rounded-xl border-2 border-sky-400">
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Id</span>
            <span>{book?._id}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Title</span>
            <span>{book?.title}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Author</span>
            <span>{book?.author}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Publish year</span>
            <span>{book?.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Created at</span>
            <span>{ book?.createdAt ? new Date(book?.createdAt).toString() : 'N/A' }</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Updated at</span>
            <span>{ book?.updatedAt ? new Date(book?.updatedAt).toString() : 'N/A' }</span>
          </div>
        </div>
      }
    </div>
  )
}

export default ShowBook