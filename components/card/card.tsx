export default function Card() {
  return (
    <div className="flex gap-5 text-center bg-purple p-1 row-2">
      <div className="flex-1 bg-blue">01</div>
      <div className="flex-1 transition-all hover:flex-2 duration-150 cursor-pointer bg-pink">02</div>
      <div className="flex-1 bg-orange">03</div>
    </div>
  );
}
