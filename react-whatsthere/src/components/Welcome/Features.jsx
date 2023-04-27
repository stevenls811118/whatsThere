import landing4 from '../../images/landing4.png';

export default function Features() {
  return (
    <section
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${landing4})` }}
    >
      <article className="p-4">
        <img alt="feature 1"></img>
        <h2><b>First Feature</b></h2>
        <p>
          temp data
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 2"></img>
        <h2><b>Second feature</b></h2>
        <p>
          temp data
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 3"></img>
        <h2><b>Third Feature</b></h2>
        <p>
          Temp data
        </p>
      </article>
    </section>
  );
}