import { Card,CardTitle} from "./ui/card";
import img from "../assets/download.jpeg"
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  id: number;
  photoUrl: string;
}

function Member({name,pg}:{name:string,pg:string}){
  const navigate = useNavigate();

  const members:User[] = [
    {
      name: "Samuel",
      id: 1,
      photoUrl: "aako",
    },
    {
      name: "Bernardo",
      id: 2,
      photoUrl: "dakow",
    }
  ]

  return(
    <Card className="text-center" onClick={()=>{navigate(pg)}}>
      <img src={img} alt="" className="object-cover h-32 w-32 rounded-full mx-auto"/>
      <CardTitle>{name}</CardTitle>
    </Card>
  )
}

export default Member;
