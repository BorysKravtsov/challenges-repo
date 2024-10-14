import Link from "next/link";
import Image from "next/image";
export default function Volume({ volumeData }) {
  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.title}>
            <h3>{`${book.ordinal}: ${book.title}`}</h3>
          </li>
        ))}
      </ul>
      <Image
        src={volumeData.cover}
        width={140}
        height={230}
        alt={volumeData.title}
      />
    </div>
  );
}
