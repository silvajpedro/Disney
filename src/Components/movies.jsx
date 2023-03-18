export default function Movies({ poster }) {
  return (
    <>
      <figure>
        <img src={poster} alt="filme disney" />
        <button>Assista agora</button>
      </figure>
    </>
  );
}
