import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { MdOutlineHome } from "react-icons/md";

describe("Button", () => {
  test("Renders the basic Button component", () => {
    render(<Button />);
  });

  test("Renders the primary dark Button component", () => {
    render(<Button variant="primary" theme="dark" />);
  });

  test("Renders the primary light Button component", () => {
    render(<Button variant="primary" theme="light" />);
  });

  test("Renders the secondary dark Button component", () => {
    render(<Button variant="secondary" theme="dark" />);
  });

  test("Renders the secondary light Button component", () => {
    render(<Button variant="secondary" theme="light" />);
  });

  test("Renders the danger Button component", () => {
    render(<Button variant="danger" />);
  });

  test("Renders the small Button component", () => {
    render(<Button size="small" />);
  });

  test("Renders the normal Button component", () => {
    render(<Button size="normal" />);
  });

  test("Renders the large Button component", () => {
    render(<Button size="large" />);
  });

  test("Renders the icon Button component", () => {
    render(
      <Button size="icon">
        <MdOutlineHome />
      </Button>
    );
  });

  test("Renders the icon with text Button component", () => {
    render(
      <Button size="icon">
        <MdOutlineHome className="mr-2" /> Home
      </Button>
    );
  });

  test("Renders the non-rounded Button component", () => {
    render(<Button rounded={false} />);
  });

  test("Renders the disabled Button component", () => {
    render(<Button disabled={true} />);
  });
});
