export interface PostListItem {
  id: string;
  title: string;
  short_content: string;
  thumbnail_url: string;
  created_at: string; // 날짜 형식이므로 string 또는 Date로 받을 수 있습니다.
  view_count: number;
  like_count: number;
  comment_count: number;
  writer_id: number;
  writer_name: string;
  writer_thumbnail_url: string;
}