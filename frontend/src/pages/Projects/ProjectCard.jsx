export const ProjectCard = (props) => {

  const openUrl = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="flex flex-col justify-center m-8 p-5 bg-neutral-600 items-center rounded-xl text-white">
        <img src={props.image} className="rounded-2xl shadow-md m-2" />
        <h3 className="font-['Poppins'] m-2 text-2xl">{props.title}</h3>
        <p className="text-center">{props.description}</p>
        <br />
        <div className="text-xl m-1 pt-4">Stack & Tools:</div>
        <div className="pt-1">{props.stack}</div>
        <div className="m-8 flex justify-between space-x-28">
          
          {props.liveUrl ? <button className="bg-neutral-400 p-3 rounded-lg w-28" onClick={() => openUrl(props.liveUrl)}>
            View Live
          </button> : null}
          <button className="bg-neutral-400 p-3 rounded-lg w-28" onClick={() => openUrl(props.codeUrl)}>
            View Code
          </button>
        </div>
      </div>
    </>
  );
};
