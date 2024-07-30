import React, { useMemo, useState } from 'react';

// Create a large array with 30 million items
const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}));

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);

  // Use useMemo to memoize the result of the search
  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]); // Only recompute if items change

  // const selectedItem = items.find((item) => item.isSelected);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem ? selectedItem.id : 'None'}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
