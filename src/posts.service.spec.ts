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

  it("should add a new post", () => {
    const createdPost = postsService.create(post);

    expect(createdPost).toEqual({
      id: "2",
      text: "Mocked post",
      date: expect.any(String),
    });
  });

  it("should find a post", () => {
    const createdPost = postsService.create(post);

    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual(createdPost);
    expect(foundPost).toEqual({
      id: "2",
      text: "Mocked post",
      date: expect.any(String),
    });
  });
});
