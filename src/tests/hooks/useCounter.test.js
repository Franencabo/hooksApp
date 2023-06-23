import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(3);
    });

    expect(result.current.counter).toBe(14);
  });

  test("debe de reducir el counter en 1", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(3);
    });

    expect(result.current.counter).toBe(6);
  });

  test("debe de resetar el counter al valor de inicio", () => {
    const { result } = renderHook(() => useCounter());
    const { reset } = result.current;

    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
