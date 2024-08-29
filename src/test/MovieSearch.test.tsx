import { render, screen } from "@testing-library/react";
import { MovieSearch } from "../components/MovieSearch";
import { QueryClient, QueryClientProvider } from "react-query";
import { describe, expect, it } from "@jest/globals";

const queryClient = new QueryClient();

describe("probe function", () => {
  it("should return sum of two numbers", () => {
    function probe(x: number, y: number) {
      return x + y;
    }
    expect(probe(1, 2)).toBe(3);
    expect(probe(-1, 1)).toBe(0);
    expect(probe(0, 0)).toBe(0);
  });
});

describe("MovieSearch Component", () => {
  it("renders the input and button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieSearch />
      </QueryClientProvider>
    );
    const inputElement = screen.getByPlaceholderText("type here ...");
    const buttonElement = screen.getByText("search");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
