import { PostListItem } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: PostListItem;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="relative w-full h-52">
          <Image
            src={post.thumbnail_url || '/placeholder.svg'} // 썸네일이 없을 경우 기본 이미지
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold truncate">{post.title}</h3>
          <p className="text-gray-600 mt-2 text-sm h-10 overflow-hidden">{post.short_content}</p>
          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <span>{`by ${post.writer_name}`}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
