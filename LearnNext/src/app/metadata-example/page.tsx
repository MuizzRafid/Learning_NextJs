import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaData example",
  description: " This is my example of writing metadata",
};

export default function MetaDataExample() {
  const examples = [
    {
      id: "1",
      title: "One",
    },
    {
      id: "2",
      title: "two",
    },
    {
      id: "3",
      title: "Three",
    },
  ];

  return (
    <div>
      <h1>Meta data example</h1>
      <ul>
        {examples.map((item) => (
          <li key={item.id}>
            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
