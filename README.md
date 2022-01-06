# use-bouncy-text

A React hook to make any text node bOuNcY

## Usage

```javascript
// Define a ref to the text node you want to make bouncy
export function ComponentWithBouncyText() {
  const bounceRef = useRef();
  useBouncyText(bounceRef);

  return <div ref={bounceRef}>I'm bouncy teeeeext</div>;
}
```
