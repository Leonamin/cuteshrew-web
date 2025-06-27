import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          CuteShrew Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          개발과 기술에 대한 생각을 나누는 공간입니다. 
          새로운 기술을 배우고, 경험을 공유하며 함께 성장해나가요.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/posts" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            글 목록 보기
          </Link>
          <Link 
            href="/write" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            글쓰기
          </Link>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">최근 글</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 임시 포스트 카드들 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Next.js로 블로그 만들기
            </h3>
            <p className="text-gray-600 mb-4">
              Next.js와 TypeScript를 사용해서 블로그를 만드는 과정을 공유합니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">2024.01.15</span>
              <span className="text-sm text-blue-600">5분 읽기</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              TypeScript 타입 시스템 이해하기
            </h3>
            <p className="text-gray-600 mb-4">
              TypeScript의 타입 시스템을 깊이 있게 다뤄보겠습니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">2024.01.10</span>
              <span className="text-sm text-blue-600">8분 읽기</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tailwind CSS 활용 팁
            </h3>
            <p className="text-gray-600 mb-4">
              Tailwind CSS를 더 효율적으로 사용하는 방법들을 소개합니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">2024.01.05</span>
              <span className="text-sm text-blue-600">6분 읽기</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
        <p className="text-gray-600 mb-4">
          안녕하세요! 저는 개발자 CuteShrew입니다. 
          프론트엔드 개발에 관심이 많고, 새로운 기술을 배우는 것을 좋아합니다.
        </p>
        <p className="text-gray-600">
          이 블로그에서는 개발 경험, 기술 리뷰, 그리고 개인적인 생각들을 공유하려고 합니다.
          함께 성장해나가요! 🚀
        </p>
      </section>
    </div>
  );
}
