export default function App() {
  const receipt = {
    table: 12,
    items: [
      { name: "Wagyu Steak", price: 250 },
      { name: "Truffle Pasta", price: 150 },
      { name: "Evian Water", price: 25 }
    ]
  };
  const total = receipt.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-navy text-champagne font-serif p-6">
      <div className="max-w-md mx-auto border-2 border-champagne rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl mb-2 text-center">Table {receipt.table}</h1>
        <h2 className="text-2xl mb-4 text-center">Your Dinner</h2>
        <ul className="mb-4 space-y-2">
          {receipt.items.map((item, i) => (
            <li key={i} className="flex justify-between text-lg">
              <span>{item.name}</span>
              <span>SAR {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-champagne pt-3 mb-4 text-right text-xl">
          <strong>Total: SAR {total.toFixed(2)}</strong>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <button className="bg-champagne text-navy rounded-lg py-2 font-semibold hover:bg-opacity-90">
            Pay Full Bill
          </button>
          <button className="bg-champagne text-navy rounded-lg py-2 font-semibold hover:bg-opacity-90">
            Split Bill
          </button>
          <button className="bg-champagne text-navy rounded-lg py-2 font-semibold hover:bg-opacity-90">
            Pay Selected Items
          </button>
        </div>
      </div>
    </div>
  );
}

