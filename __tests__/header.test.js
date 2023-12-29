import { render, screen } from "@testing-library/react"
import Header from "../app/components/Header"
import "@testing-library/jest-dom"

test('check header is loaded or not', () => {
  render(<Header />);

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument()
})

test('check header have 6 Link tags or not', () => {
  render(<Header />);

  const links = screen.getAllByRole('link');

  expect(links?.length).toBe(6)
})