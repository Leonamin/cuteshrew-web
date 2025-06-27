import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            CuteShrew
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              홈
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-gray-900">
              글목록
            </Link>
            <Link href="/write" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              글쓰기
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 