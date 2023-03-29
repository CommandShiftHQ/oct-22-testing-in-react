import React, { render, screen } from "@testing-library/react";
import Post from "../components/Post";
import renderer from "react-test-renderer";

describe("Post", () => {
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

  test("renders as expected", () => {
    const rendered = renderer.create(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert author is present", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(screen.getByText("Author: test author")).toBeInTheDocument();
  });
});
