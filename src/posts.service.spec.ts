import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;

  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(() => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

it('should add a new post', () => {
  postsService.create(post);

  expect(postsService.find('2')).toMatchObject({
    id: '2',
    text: 'Mocked post',
    date: expect.any(String),
  });
});

it('should find a post', () => {
  const createdPost = postsService.create(post);

  expect(postsService.find(createdPost.id)).toStrictEqual(createdPost);
});

    expect(postsService.find(createdPost.id)).toEqual(createdPost);
  });
