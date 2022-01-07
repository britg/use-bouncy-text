/* eslint-disable functional/immutable-data */
import { MutableRefObject, useEffect, useRef } from 'react';

export function useBouncyText(
  ref: MutableRefObject<HTMLElement>,
  cssClass: string = 'bouncy-text'
) {
  const appliedRef = useRef(false);
  useEffect(() => {
    if (appliedRef.current || !ref.current) {
      return;
    }
    appliedRef.current = true;
    const text = ref.current.innerHTML;
    let wrappedText = '';

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      if (char === ' ') {
        wrappedText += '&nbsp;';
      } else {
        wrappedText += '<span>' + text.charAt(i) + '</span>';
      }
    }

    ref.current.innerHTML = wrappedText;

    const els = ref.current.getElementsByTagName('span');
    for (let j = 0; j < els.length; j++) {
      const el = els[j];
      el.className = cssClass;
      el.style.animationDelay = `${(j % 5) * 150}ms`;
    }
  }, [ref.current]);
}
