import { act, renderHook } from "@testing-library/react";
import useCounter from ".";

describe("useCounter", () => {
  it("Should render the initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    expect(result.current.count).toBe(0);
  });

  it("Should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it("Should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
