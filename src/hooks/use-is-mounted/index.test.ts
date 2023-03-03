import { act, renderHook } from '@testing-library/react';
import { useIsMounted } from '.';

describe('useIsMounted', () => {
  it('render once', () => {
    const { result } = renderHook(() => useIsMounted());

    act(() => {
      const { current } = result;
      expect(current()).toEqual(true);
    });
  });
});
