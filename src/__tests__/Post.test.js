import React from "react";
import Post from "../components/Post";
import renderer from "react-test-renderer";

describe("Post", () => {
  test("renders as expected", () => {
    const validProps = {
      postData: {
        title: "test title",
        author: "test author",
        date: "test date",
        isPublished: true,
        body: "test body",
        tags: ["test tag 1", "test tag 2", "test tag 3"],
      },
      handleUpvote: jest.fn(),
    };
    const rendered = renderer.create(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(rendered).toMatchSnapshot();
  });
});
