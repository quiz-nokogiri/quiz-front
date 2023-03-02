import Link from 'next/link'

export default function RootPage() {
  return (
    <div className="container">
      <h1>
        <span>サバ</span>塩
      </h1>
      <div>
        <Link href="/questions">START</Link>
      </div>
    </div>
  );
};
