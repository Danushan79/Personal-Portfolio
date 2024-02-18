import myPic from "../../../assets/my-pic.jpg";
export default function HomeHero() {
  return (
    <div className="bg-white w-full p-4">
      <div className=" flex gap-x-2 justify-center items-center ">
        <img src={myPic} alt="mypic" className="w-80 h-auto" />
        <div className="ml-4">
          <p className="text-3xl">I'm Danushan Kanagasingam</p>
          <p className="text-3xl">Backend Developer</p>
        </div>
      </div>
    </div>
  );
}
