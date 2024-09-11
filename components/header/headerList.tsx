import Link from "next/link";
import { FC } from "react";

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}
const navList: NavItem[] = [
  {
    name: "彭博社",
    href: "/",
    children: [
      {
        name: "彭博社介紹",
        href: "/",
      },
      {
        name: "彭博社排名",
        href: "/",
      },
      {
        name: "彭博社推薦",
        href: "/",
      },
    ],
  },
  {
    name: "彭博社遊戲",
    href: "/",
    children: [
      {
        name: "彭博社遊戲1",
        href: "/",
      },
      {
        name: "彭博社遊戲2",
        href: "/",
      },
      {
        name: "彭博社遊戲3",
        href: "/",
      },
      {
        name: "彭博社遊戲4",
        href: "/",
      },
      {
        name: "彭博社遊戲5",
        href: "/",
      },
      {
        name: "彭博社遊戲6",
        href: "/",
      },
    ],
  },
  {
    name: "彭博社優惠",
    href: "/",
    children: [
      {
        name: "當前活動",
        href: "/",
      },
      {
        name: "活動日曆",
        href: "/",
      },
      {
        name: "優惠活動",
        href: "/",
      },
    ],
  },
  {
    name: "彭博社資訊",
    href: "/",
    children: [
      {
        name: "彭博社訊息",
        href: "/",
      },
      {
        name: "投票指南",
        href: "/",
      },
      {
        name: "體育動態",
        href: "/",
      },
      {
        name: "遊戲動態",
        href: "/",
      },
      {
        name: "奢華生活",
        href: "/",
      },
    ],
  },
  {
    name: "運動投票",
    href: "/",
    children: [
      {
        name: "體育投票",
        href: "/",
      },
      {
        name: "彩券投票",
        href: "/",
      },
    ],
  },
];

const HeaderList: FC = () => {
  return (
    <>
      {navList.map((item: NavItem, index: number) => {
        return (
          <li key={index} className="group">
            <Link href={item.href} title={item.name}>
              {item.name}
            </Link>
            {item.children && (
              <ul className="group-hover:h-auto group-hover:block group-hover:opacity-100">
                {item.children.map((child: NavItem, index: number) => (
                  <li key={index}>
                    <Link href={child.href} title={child.name}>
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default HeaderList;
