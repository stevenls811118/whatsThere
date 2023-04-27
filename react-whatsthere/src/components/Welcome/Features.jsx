import logo2 from "../../images/logo2.png";

export default function Features() {
  return (
    <div className=" flex flex-col items-center absolute top-0 left-0 w-[30%] h-screen z-10 pl-4 ">
      <div >
        <img src={logo2} alt="logo" className="h-40 m-3" />
      </div>
      <div className=" h-full w-full ">
        <section className="flex flex-col justify-around h-full p-4 text-white space-y-3 text-center">
          <article className="p-4 bg-black/50">
            <h1 className="text-center text-lg font-bold pb-1">Map and Attractions!</h1>
            <p>
              The map provides an interactive experience for tourists and locals alike, allowing them to easily navigate and discover nearby attractions. The attraction cards are displayed on the map, and users can click on them to get more information about each attraction, including photos, a small description and ratings.
            </p>
          </article>
          <article className="p-4 bg-black/50">
            <h1 className="text-center text-lg font-bold pb-1">Multiple trips!</h1>
            <p>
              Do you have multiple trips coming up? Make sure that you are ready to go. Whats there allows you to create and save multiple trips to your profile, with our drop down menu you can easily select a trip and edit upcoming visits to attrctions.
            </p>
          </article>
          <article className="p-4 bg-black/50">
            <h1 className="text-center text-lg font-bold pb-1">Alerts</h1>
            <p>
              Never miss a visit! Once a trip is planned, Whats there will send you reminders when you have an upcoming visit to an attraction.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
