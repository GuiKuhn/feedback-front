import Member from "../components/Member";

const MaingPage = () => {
  return <>
    <h1>Main Page</h1>
    <div className="grid grid-cols-3 gap-8 px-16">
      <Member></Member>
      <Member></Member>
      <Member></Member>
      <Member></Member>
      <Member></Member>
      <Member></Member>
    </div>
  </>
};

export default MaingPage;
