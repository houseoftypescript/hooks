import { act, renderHook } from '@testing-library/react';
import { useCopyToClipboard } from '.';

describe('useCopyToClipboard', () => {
  it('render once', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    act(() => {
      const { current } = result;
      const [value] = current;
      expect(value).toEqual(null);
    });
  });
});
