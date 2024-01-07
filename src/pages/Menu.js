const drinks = [
  {
    name: "Red Sangria",
    price: "$25",
  },
  {
    name: "Ouzo on the rocks",
    price: "$11",
  },
  {
    name: "Arak with mezze",
    price: "$9",
  },
  {
    name: "Limoncello Spritz",
    price: "$10",
  },
  {
    name: "Turkish Ayran",
    price: "$5",
  },
  {
    name: "Mineral Water",
    price: "$3",
  },
];

const appitizer = [
  {
    name: "Greek Salad",
    price: "$13",
  },
  {
    name: "Bruchetta",
    price: "$6",
  },
  {
    name: "Spanakopita",
    price: "$19",
  },
  {
    name: "Saganaki",
    price: "$10",
  },
];

const dessert = [
  {
    name: "Lemon Cake",
    price: "$5",
  },
  {
    name: "Baklava",
    price: "$11",
  },
  {
    name: "Loukoumades",
    price: "$5",
  },
  {
    name: "Crema Catalana",
    price: "$9",
  },
];

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our Menu
          </h2>
          <p className="mt-2 text-lg leading-8">All items at one places.</p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 rounded-md bg-[#495e57] text-white shadow-xl p-6">
          <div className="mx-auto mt-16 sm:mt-20">
            <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
              Drinks
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {drinks.map((item) => (
                <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto mt-16 sm:mt-20">
            <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
              Appitizer
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {appitizer.map((item) => (
                <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto mt-16 sm:mt-20">
            <h3 className="text-3xl text-center text-[#f4ce14] font-bold tracking-tight sm:text-4xl">
              Dessert
            </h3>
          </div>
          <div className="mt-6 sm:text-center">
            <dl>
              {dessert.map((item) => (
                <div className="px-4 py-6 sm:grid shadow-xl sm:grid-cols-3 text-lg font-medium leading-6 sm:gap-4 sm:px-0">
                  <dt>{item.name}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
