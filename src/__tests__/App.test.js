import { render, screen } from "@testing-library/react";
import App from "../components/App";
import renderer from "react-test-renderer";

describe("App", () => {
  test("Renders heading of the page", () => {
    render(<App />);
    const headingElement = screen.getByText("Testing in React");

    expect(headingElement).toBeInTheDocument();
  });

  test("renders correctly", () => {
    const rendered = renderer.create(<App />);

    expect(rendered).toMatchSnapshot();
  });
});
