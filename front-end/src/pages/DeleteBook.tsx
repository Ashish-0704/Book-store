import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/${id}`).then(() => {
      setLoading(false);
      enqueueSnackbar('Book deleted successfully', { variant: 'success' });
      navigate('/');
    }).catch((error) => {
      setLoading(false);
      // alert('Some error occurred. Please check the console for more info');
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    });
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Delete book</h1>
      { loading ? <Spinner/> : '' }
      <div className="flex flex-col items-center w-[600px] p-8 mx-auto rounded-xl border-2 border-sky-400">
        <h3 className="text-2xl">Are you sure you want to delete this book ?</h3>
        <button onClick={handleDeleteBook} className="w-full m-8 p-4 text-white bg-red-600">Yes, delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook