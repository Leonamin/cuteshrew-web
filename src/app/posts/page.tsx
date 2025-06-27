import Link from 'next/link';

// 임시 데이터
const mockPosts = [
  {
    id: '1',
    title: 'Next.js로 블로그 만들기',
    excerpt: 'Next.js와 TypeScript를 사용해서 블로그를 만드는 과정을 공유합니다. App Router, Server Components, 그리고 다양한 최적화 기법들을 다뤄보겠습니다.',
    authorName: 'CuteShrew',
    publishedAt: '2024-01-15',
    tags: ['Next.js', 'TypeScript', '블로그'],
    readTime: 5,
  },
  {
    id: '2',
    title: 'TypeScript 타입 시스템 이해하기',
    excerpt: 'TypeScript의 타입 시스템을 깊이 있게 다뤄보겠습니다. 제네릭, 유니온 타입, 인터섹션 타입 등 고급 타입 기능들을 살펴봅니다.',
    authorName: 'CuteShrew',
    publishedAt: '2024-01-10',
    tags: ['TypeScript', '타입시스템'],
    readTime: 8,
  },
  {
    id: '3',
    title: 'Tailwind CSS 활용 팁',
    excerpt: 'Tailwind CSS를 더 효율적으로 사용하는 방법들을 소개합니다. 커스터마이징, 컴포넌트 추상화, 그리고 성능 최적화 팁을 다룹니다.',
    authorName: 'CuteShrew',
    publishedAt: '2024-01-05',
    tags: ['CSS', 'Tailwind', '스타일링'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'React 19의 새로운 기능들',
    excerpt: 'React 19에서 추가된 새로운 기능들을 살펴보고, 실제 프로젝트에 어떻게 적용할 수 있는지 알아봅니다.',
    authorName: 'CuteShrew',
    publishedAt: '2024-01-01',
    tags: ['React', '프론트엔드'],
    readTime: 10,
  },
];

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">모든 글</h1>
        <p className="text-gray-600">
          개발과 기술에 대한 모든 글들을 확인해보세요.
        </p>
      </div>

      <div className="space-y-8">
        {mockPosts.map((post) => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Link href={`/posts/${post.id}`}>
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{post.authorName}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime}분 읽기</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 