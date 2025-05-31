import { Card } from "./ui/card";
import img from "../assets/download.jpeg"

function Member(){
  return(
    <Card>
      <img src={img} alt="" className="object-cover h-24"/>
      <h1>dasokdako</h1>
    </Card>
  )
}

export default Member;
