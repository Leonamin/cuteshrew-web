import { getRecentPosts } from '@/services/postService';
import PostCard from '@/components/posts/PostCard';

export default async function HomePage() {
  // 서버 컴포넌트에서 직접 API를 호출합니다.
  const recentPosts = await getRecentPosts(1, 12); // 예시로 12개를 가져옵니다.

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          CuteShrew Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          개발과 기술에 대한 생각을 나누는 공간입니다.
          새로운 기술을 배우고, 경험을 공유하며 함께 성장해나가요.
        </p>
      </section>

      <main>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">게시글이 없습니다.</p>
          )}
        </div>
      </main>
    </div>
  );
}