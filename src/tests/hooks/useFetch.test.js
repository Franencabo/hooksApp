import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../hooks";

const counter = 1;

describe("Pruebas en el hook useFetch", () => {
  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() =>
      useFetch(`https://rickandmortyapi.com/api/location/${counter}`)
    );

    const { data, isLoading, hasError } = result.current;

    expect(data).toBe(null);
    expect(isLoading).toBe(true);
    expect(hasError).toBe(null);
  });

  test("debe retornar la data deseada, isLoading en false, hasError en null", async () => {
    const { result } = renderHook(() =>
      useFetch(`https://rickandmortyapi.com/api/location/${counter}`)
    );

    await waitFor(() => expect(result.current.data).not.toBe(null));

    const { data, isLoading, hasError } = result.current;
    expect(data).not.toBe(null);
    expect(isLoading).toBeFalsy();
    expect(hasError).toBe(null);
  });
});
