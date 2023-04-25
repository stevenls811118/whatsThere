import landing4 from '../../images/landing4.png';

export default function Features() {
  return (
    <section
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${landing4})` }}
    >
      <article className="p-4">
        <img alt="feature 1"></img>
        <p>
          temp data
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 2"></img>
        <p>
          temp data
        </p>
      </article>

      <article className="p-4">
        <img alt="feature 3"></img>
        <p>
          Temp data
        </p>
      </article>
    </section>
  );
}