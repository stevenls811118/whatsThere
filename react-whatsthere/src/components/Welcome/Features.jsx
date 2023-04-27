import landing4 from '../../images/landing4.png';

export default function Features() {
  return (
    <section
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${landing4})` }}
    >
      <article className="p-4">
        <img alt="feature 1"></img>
        <h2><b>Map and Attractions!</b></h2>
        <p>
        The map provides an interactive experience for tourists and locals alike, allowing them to easily navigate and discover nearby attractions. The attraction cards are displayed on the map, and users can click on them to get more information about each attraction, including photos, a small description and ratings. The map is designed to be user-friendly, with clear and concise information displayed on each card. Overall, the map aims to make it easier for people to explore a city and find the best attractions to visit.
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 2"></img>
        <h2><b>Multiple trips!</b></h2>
        <p>
          Do you have multiple trips coming up? Make sure that you are ready to go. Whats there allows you to create and save multiple trips to your profile, with our drop down menu you can easily select a trip and edit upcoming visits to attrctions.
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 3"></img>
        <h2><b>Alerts</b></h2>
        <p>
          Never miss a visit! Once a trip is planned, Whats there will send you reminders when you have an upcoming visit to an attraction. 
        </p>
      </article>
    </section>
  );
}