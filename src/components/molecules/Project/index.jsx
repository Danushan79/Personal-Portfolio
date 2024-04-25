import LinkText from "../../atoms/LinkText";
export default function Project({ imageUrl, description, repoUrl }) {
  return (
    <div className="relative project h-300 border-2 border-black">
      <img src={imageUrl} alt={"alt"} className="h-300" />
      <div className="absolute bottom-0 inset-x-0 bg-black opacity-60 project-overlay"></div>
      <div className="absolute  h-300 bottom-0 inset-x-0 text-white project-overlay-text p-4">
        <p>{description}</p>
        <div className="absolute bottom-0 mb-4 h-10 mt-2 hover:border-b-2 hover:border-gold text-white hover:text-gold w-6/12">
          <LinkText
            link={repoUrl}
            newTab={true}
            text={"Check Repo"}
            // classname={"hover:text-blue-500"}
          />
        </div>
      </div>
    </div>
  );
}
