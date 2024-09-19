import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {title, author, publishYear};
    setLoading(true);
    axios.post('http://localhost:5555', data).then(() => {
      setLoading(false);
      enqueueSnackbar('Book added successfully', { variant: 'success' });
      navigate('/');
    }).catch((error) => {
      setLoading(false);
      // alert('Some error occurred. Please check the console for more info');
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    })
  }

  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Create book</h1>
      { loading ? <Spinner/> : '' }
      <div className="flex flex-col w-[600px] p-4 mx-auto rounded-xl border-2 border-sky-400">
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Publish year</label>
          <input 
            type="text" 
            value={publishYear} 
            onChange={e => setPublishYear(e.target.value)} 
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <button className="m-8 p-2 bg-sky-300" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook