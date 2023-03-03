import { act, renderHook } from '@testing-library/react';
import { useIsFirstRender } from '.';

describe('useIsFirstRender', () => {
  it('render once', () => {
    const { result } = renderHook(() => useIsFirstRender());

    act(() => {
      const { current } = result;
      expect(current).toEqual(true);
    });
  });
});
