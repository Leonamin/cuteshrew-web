import { PostListItem } from '@/types/post';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * 최신 게시글 목록을 가져오는 API 함수
 * @param page 페이지 번호
 * @param limit 한 페이지에 보여줄 게시글 수
 */
export async function getRecentPosts(page: number = 1, limit: number = 10): Promise<PostListItem[]> {
  try {
    const response = await fetch(`${API_URL}/posts/list/recent?page=${page}&limit=${limit}`);

    if (!response.ok) {
      // 응답이 성공적이지 않을 경우 에러를 발생시킵니다.
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data: PostListItem[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch recent posts:', error);
    // 에러가 발생했을 때 빈 배열을 반환하여 페이지 렌더링은 실패하지 않도록 합니다.
    return [];
  }
}
