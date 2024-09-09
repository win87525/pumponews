import Link from "next/link";

export default function HeaderList() {
  return (
    <>
      <li className="group">
        <Link href="/">彭博社</Link>
        {/* <ul className=" group-hover:h-auto  group-hover:block">
          <li>
            <Link href="/">彭博社介紹</Link>
          </li>
          <li>
            <Link href="/">彭博社排名</Link>
          </li>
          <li>
            <Link href="/">彭博社推薦</Link>
          </li>
        </ul> */}
      </li>
      <li className="group">
        <Link href="/">彭博社</Link>
      </li>
      <li className="group">
        <Link href="/">彭博社</Link>
      </li>
      <li className="group">
        <Link href="/">彭博社</Link>
      </li>
      <li className="group">
        <Link href="/">彭博社</Link>
      </li>
    </>
  );
}
