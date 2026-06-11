import { DazzlingDiva } from "../welcome/DazzlingDiva";

export function meta() {
  return [
    { title: "Dazzling Diva" },
    { name: "description", content: "Dazzling Diva-An online clothing store." },
  ];
}

export default function Home() {
  return <DazzlingDiva />;
}
