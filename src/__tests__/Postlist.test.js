import React, { fireEvent, render, screen } from "@testing-library/react";
import Postlist from "../components/Postlist";
import renderer from "react-test-renderer";

describe("Postlist", () => {
  const validProps = {
    posts: [
      {
        id: 1,
        author: "test author",
        body: "test body",
        date: "test date",
        isPublished: true,
        tags: ["test tag1", "test tag2", "test tag3"],
        title: "test title",
      },
      {
        id: 2,
        author: "test author 2",
        body: "test body 2",
        date: "test date 2",
        isPublished: false,
        tags: ["test tag1-2", "test tag2-2", "test tag3-2"],
        title: "test title 2",
      },
    ],
  };

  test("renders as expected", () => {
    const rendered = renderer.create(<Postlist posts={validProps.posts} />);

    expect(rendered).toMatchSnapshot();
  });

  test("Last upvoted is displayed when button is clicked", async () => {
    render(<Postlist posts={validProps.posts} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);

    const firstPostButton = buttons[0];
    const secondPostButton = buttons[1];

    const lastUpvotedBox = screen.queryByText("Last upvoted post:");

    expect(lastUpvotedBox).toBeNull();

    fireEvent.click(firstPostButton);

    expect(
      screen.getByText("Last upvoted post: test title")
    ).toBeInTheDocument();

    fireEvent.click(secondPostButton);

    const lastUpvoted = await screen.findByText("Last upvoted post: test title 2");

    expect(lastUpvoted).toBeInTheDocument()
  });
});
