import { useNavigate } from 'react-router-dom';

interface ButtonProps{
  title: string,
  route: string
}

export default function Button({title, route}: ButtonProps){
  const navigate = useNavigate();

  return(
    <button
      className="bg-sky-200 m-4 p-2 rounded font-bold"
      onClick={() => navigate(route)}
    >
        {title}
    </button>
  )
}