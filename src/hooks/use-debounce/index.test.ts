import { act, renderHook } from '@testing-library/react';
import { useDebounce } from '.';

describe('useDebounce', () => {
  it('render once', () => {
    const { result } = renderHook(() => useDebounce('value', 100));

    act(() => {
      const { current } = result;
      expect(current).toEqual('value');
    });
  });
});
