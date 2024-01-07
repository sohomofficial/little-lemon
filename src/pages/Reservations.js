import { Fragment, useState } from "react";
import { Listbox, Transition, Switch, Dialog } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const occasions = [
  { name: "Birthday" },
  { name: "Anniversary" },
  { name: "Others" },
];

export default function Reservation() {
  const [selected, setSelected] = useState(occasions[0]);

  const [agreed, setAgreed] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Reservations
          </h2>
          <p className="mt-2 text-lg leading-8">
            Fill up the respective details below in order to confirm your
            reservation.
          </p>
        </div>
        <form className="mx-auto mt-16 sm:mt-20 rounded-md bg-[#495e57] text-white shadow-xl p-6">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
              {/* Seating */}
              <div className="flex items-center sm:justify-center sm:col-span-3 gap-x-3">
                <label
                  htmlFor="indoor-seating"
                  className="block text-xl font-medium leading-6"
                >
                  Indoor Seating
                </label>
                <input
                  id="indoor-seating"
                  name="seating"
                  type="radio"
                  className="h-4 w-4 text-black focus:ring-black"
                />
              </div>
              <div className="flex items-center sm:justify-center sm:col-span-3 gap-x-3">
                <label
                  htmlFor="outdoor-seating"
                  className="block text-xl font-medium leading-6"
                >
                  Outdoor Seating
                </label>
                <input
                  id="outdoor-seating"
                  name="seating"
                  type="radio"
                  className="h-4 w-4 text-black focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-6 gap-6">
              {/* Date */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="date"
                  className="block text-xl font-medium leading-6"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="date"
                    name="date"
                    type="date"
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Number of Diners */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="diners"
                  className="block text-xl font-medium leading-6"
                >
                  Number of Diners
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="diners"
                    name="diners"
                    type="number"
                    min={2}
                    max={18}
                    placeholder={4}
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Occasion */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-xl font-medium leading-6"
                >
                  Occasion
                </label>
                {/* Listbox */}
                <Listbox
                  className="mt-2"
                  value={selected}
                  onChange={setSelected}
                >
                  <div className="relative">
                    <Listbox.Button className="relative w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6">
                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-[#495e57]"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-200 delay-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {occasions.map((occasion, occasionIdx) => (
                          <Listbox.Option
                            key={occasionIdx}
                            className={({ active }) =>
                              `relative cursor-default text-black select-none py-3 pl-10 pr-4 ${
                                active ? "bg-gray-100" : ""
                              }`
                            }
                            value={occasion}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-bold" : "font-medium"
                                  }`}
                                >
                                  {occasion.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#495e57]">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              {/* Time */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="time"
                  className="block text-xl font-medium leading-6"
                >
                  Time
                </label>
                <div className="mt-2">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="block  w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <hr />

            {/* Personal Infos */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-xl font-medium leading-6"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-xl font-medium leading-6"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Email Address */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone-number"
                  className="block text-xl font-medium leading-6"
                >
                  Phone number
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                  />
                </div>
              </div>
              {/* Special Requests */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-xl font-medium leading-6"
                >
                  Special Resquests
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-3 text-[#495e57] bg-[#f4ce14] font-bold shadow-xl focus:ring-2 focus:ring-inset focus:ring-black sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Privacy Policy/ Switch */}
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-3">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-black" : "bg-white",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-[#f4ce14] ring-2 ring-black shadow-sm transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="leading-6">
                  By selecting this, you agree to our{" "}
                  <span className="font-semibold text-[#f4ce14]">
                    privacy&nbsp;policy
                  </span>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="reset"
              className="text-xl font-semibold leading-6 text-white hover:text-[#f4ce14] duration-200 delay-100"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-[#f4ce14] duration-200 delay-100 px-6 py-2 text-xl font-semibold text-[#495e57] shadow-xl hover:bg-black hover:text-white"
            >
              Confirm Reservation
            </button>
            {/* Dialog */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 backdrop-blur-lg" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-black"
                        >
                          Reservation successful
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-black">
                            Your reservation has been confirmed. Thank you!
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md bg-[#f4ce14] text-[#495e57] px-4 py-2 text-sm font-medium hover:bg-black hover:text-white duration-200 delay-100"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </form>
      </div>
    </div>
  );
}
