export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  authorId: string;
  authorName: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  isPublished: boolean;
  thumbnailUrl?: string;
  readTime?: number; // 읽는데 걸리는 시간 (분)
}

export interface CreatePostRequest {
  title: string;
  content: string;
  tags: string[];
  isPublished: boolean;
  thumbnailUrl?: string;
}

export interface UpdatePostRequest extends Partial<CreatePostRequest> {
  id: string;
} 