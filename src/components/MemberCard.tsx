import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "./ui/card";

export type Member = {
  name: string;
  id: number;
  photoUrl: string;
};

function MemberCard({ member }: { member: Member }) {
  const navigate = useNavigate();

  return (
    <Card
      className="w-44 h-48 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => {
        navigate("/feedback-topics");
      }}
    >
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <img
          src={member.photoUrl}
          alt=""
          className="object-cover h-32 w-32 rounded-xl"
        />
        <CardTitle>{member.name}</CardTitle>
      </CardContent>
    </Card>
  );
}

export default MemberCard;
