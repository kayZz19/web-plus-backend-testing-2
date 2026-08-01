import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(() => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect(postsService['posts']).toHaveLength(2);
    expect(postsService['posts']).toContainEqual(createdPost);
  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);

    expect(postsService.find(createdPost.id)).toEqual(createdPost);
  });
});