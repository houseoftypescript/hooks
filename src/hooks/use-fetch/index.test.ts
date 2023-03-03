import { act, renderHook } from '@testing-library/react';
import { useFetch } from '.';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 'success' }),
  })
) as jest.Mock;

describe('useFetch', () => {
  const url = 'https://example.com/';

  it('render once', () => {
    const { result } = renderHook(() => useFetch(url));

    act(() => {
      const { current } = result;
      const { data, error } = current;
      expect(data).toEqual(undefined);
      expect(error).toEqual(undefined);
    });
  });
});
