import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders some text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Here we go/i);
  expect(linkElement).toBeInTheDocument();
});
