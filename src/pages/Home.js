import banner from "../assets/banner.jpg";
import GreekSalad from "../assets/greek-salad.jpg";
import Bruchetta from "../assets/bruchetta.jpg";
import LemonCake from "../assets/lemon-cake.jpg";
import { NavLink } from "react-router-dom";

const dishes = [
  {
    id: 1,
    src: GreekSalad,
    title: "Greek Salad",
    description:
      "Imagine yourself basking in the Greek sunshine, the salty breeze carrying the scent of olive groves and fresh herbs. Our Greek salad captures that essence in every bite.",
    price: "$12.99",
  },
  {
    id: 2,
    src: Bruchetta,
    title: "Bruchetta",
    description:
      "Crispy slices of rustic Italian bread, charred to perfection, kissed with garlic and drenched in luscious extra virgin olive oil. This is the canvas for a symphony of fresh, seasonal flavors.",
    price: "$5.99",
  },
  {
    id: 3,
    src: LemonCake,
    title: "Lemon Cake",
    description:
      "Our citrusy cake melts on your tongue, leaving a taste of sunshine. Finished with a touch of whipped cream and candied peel, it's a refreshing finale, any season.",
    price: "$5.00",
  },
];

function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={banner}
            alt=""
            className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-[#f4ce14] sm:text-6xl">
              Little Lemon
            </h2>
            <p className="text-white text-3xl sm:text-4xl">Chicago</p>
            <p className="text-white mt-6 text-xl leading-8">
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <NavLink
              to="/reservations"
              className="rounded-md duration-200 delay-100 bg-[#f4ce14] text-[#495e57] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-black hover:text-white"
            >
              Book a table
            </NavLink>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex justify-between lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              This weeks specials!
            </h2>
            <NavLink
              to="/menu"
              className="rounded-md duration-200 delay-100 hidden md:flex bg-[#f4ce14] text-[#495e57] text-lg px-10 py-4 font-semibold shadow-xl hover:bg-black hover:text-white"
            >
              Online Menu
            </NavLink>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-[#495e57] pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {dishes.map((item) => (
              <div
                key={item.id}
                className="max-w-sm rounded-md overflow-hidden shadow-xl"
              >
                <img
                  className="w-full"
                  src={item.src}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="">{item.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="py-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
