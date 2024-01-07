import banner from "../assets/Asset 9@4x.png";

function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">Get to know</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Us
              </p>
              <p className="mt-6 text-lg leading-8">
                Based in Chicago, Illinois, Little Lemon is a family-owned
                Mediterranean restaurant, focused on traditional recipes served
                with a modern twist. The chefs draw inspiration from Italian,
                Greek, and Turkish culture and have a menu of 12–15 items that
                they rotate seasonally. The restaurant has a rustic and relaxed
                atmosphere with moderate prices, making it a popular place for a
                meal any time of the day.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Little Lemon is owned by two Italian brothers, Mario and Adrian,
                who moved to the United States to pursue their shared dream of
                owning a restaurant. To craft the menu, Mario relies on family
                recipes and his experience as a chef in Italy. Adrian does all
                the marketing for the restaurant and led the effort to expand
                the menu beyond classic Italian to incorporate additional
                cuisines from the Mediterranean region.
              </p>
            </div>
          </div>
          <div className="grid items-center justify-center">
            <img
              src={banner}
              alt="Product screenshot"
              className="rounded-xl h-96 w-72 drop-shadow-2xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
