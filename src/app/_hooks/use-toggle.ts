import { useContext } from 'react';
import { ToggleContext } from '../_contexts/toggle-context';

export function useToggle() {
  return useContext(ToggleContext);
}
