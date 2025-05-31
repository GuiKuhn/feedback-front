import Member from "../components/Member";

const MaingPage = () => {
  return <article className="h-screen flex flex-col">
    <div className="w-screen py-4 text-center">
      <h1 className="text-3xl">Feedback Tool</h1>
    </div>
    <div className="px-16 w-screen h-full text-center flex flex-col justify-center mb-16">
      <h1 className="text-2xl mt-12 mb-8">Membros:</h1>
      <div className="grid grid-cols-3 gap-12 px-[30rem]">
        <Member name="aaaaaa" pg="/feedback"></Member>
        <Member name="aaaaaa" pg="/feedback"></Member>
        <Member name="aaaaaa" pg="/feedback"></Member>
        <Member name="aaaaaa" pg="/feedback"></Member>
        <Member name="aaaaaa" pg="/feedback"></Member>
        <Member name="aaaaaa" pg="/feedback"></Member>
      </div>
    </div>
  </article>
};

export default MaingPage;
