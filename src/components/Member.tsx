import { Card,CardTitle} from "./ui/card";
import img from "../assets/download.jpeg"

function Member({name}:{name:string}){
  return(
    <Card className="text-center">
      <img src={img} alt="" className="object-cover h-48 w-48 rounded-full mx-auto"/>
      <CardTitle>{name}</CardTitle>
    </Card>
  )
}

export default Member;
