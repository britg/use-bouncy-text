# use-bouncy-text

A React hook to make any text node bOuNcY

![example](https://user-images.githubusercontent.com/17409/148418417-d91125f7-15a1-44fd-990f-1aa4f9167601.gif)

## Installation

```
npm install use-bouncy-text
```

## Usage

```css
/* Define your bounce styles */
@keyframes bounce {
  60% {
    transform: translate(0px, -2px) scale(1.2);
  }
}

.bouncy-text {
  display: inline-block;
  margin: 0 1px;
  animation: bounce 0.6s infinite ease-in-out;
}
```

```javascript
import { useBouncyText } from 'use-bouncy-text';

export function ComponentWithBouncyText() {
  // Define a ref to the text node you want to make bouncy
  const bounceRef = useRef();
  // pass the ref and your CSS class to the hook
  useBouncyText(bounceRef, 'bouncy-text');

  return <div ref={bounceRef}>I'm bouncy teeeeext</div>;
}
```
