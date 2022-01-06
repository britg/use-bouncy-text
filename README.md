# use-bouncy-text

A React hook to make any text node bOuNcY

![example](https://user-images.githubusercontent.com/17409/148418417-d91125f7-15a1-44fd-990f-1aa4f9167601.gif)

## Usage

```javascript
// Define a ref to the text node you want to make bouncy
export function ComponentWithBouncyText() {
  const bounceRef = useRef();
  useBouncyText(bounceRef);

  return <div ref={bounceRef}>I'm bouncy teeeeext</div>;
}
```
