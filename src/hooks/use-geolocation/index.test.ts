import { act, renderHook } from '@testing-library/react';
import { useGeolocation } from '.';

const geolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

Object.defineProperty(global.navigator, 'geolocation', {
  value: geolocation,
});

describe('useGeolocation', () => {
  it('render once', () => {
    const { result } = renderHook(() => useGeolocation());

    act(() => {
      const { current } = result;
      const { position, error } = current;
      expect(position).toEqual(null);
      expect(error).toEqual('');
    });
  });
});
