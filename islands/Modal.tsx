/** @jsx h */
import { h, createRef } from "preact";
import { tw, css } from "twind/css";

export default function Modal() {
  function switchHiddenClass(el: HTMLElement) {
    el.classList.toggle("hidden");
  }
  const modalRef = createRef<HTMLDivElement>();

  const addButtonStyle = tw(
    "text-green-700",
    "hover:text-white",
    "border border-green-700",
    "hover:bg-green-400",
    "font-medium",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "text-center",
    "mr-2",
    "mb-2",
    "dark:border-green-500",
    "dark:text-green-500",
    "dark:hover:text-white",
    "dark:hover:bg-green-600"
  );

  const modalStyle = tw(
    "hidden",
    "fixed",
    "translate-y-1/2",
    "translate-x-1/2"
  );

  return (
    <div>
      <button
        type="button"
        class={addButtonStyle}
        onClick={() => switchHiddenClass(modalRef.current!)}
      >
        +
      </button>

      <div ref={modalRef} class={modalStyle}>
        <div class={tw("relative p-4 w-full max-w-md h-full md:h-auto")}>
          <div
            class={tw("relative bg-white rounded-lg shadow dark:bg-gray-700")}
          >
            <button
              type="button"
              class={tw(
                "absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              )}
              onClick={() => switchHiddenClass(modalRef.current!)}
            >
              <svg
                class={tw("w-5 h-5")}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class={tw("py-6 px-6 lg:px-8")}>
              <h3
                class={tw(
                  "mb-4 text-xl font-medium text-gray-900 dark:text-white"
                )}
              >
                Add new movie
              </h3>
              <form class={tw("space-y-6")} action="#">
                <div>
                  <label
                    for="email"
                    class={tw(
                      "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    )}
                  >
                    Title
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class={tw(
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    )}
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class={tw(
                      "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    )}
                  >
                    Production year
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class={tw(
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    )}
                    required=""
                  />
                </div>
                <div class={tw("flex justify-between")}>
                  <div class={tw("flex items-start")}>
                    <div class={tw("flex items-center h-5")}>
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class={tw(
                          "w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        )}
                        required=""
                      />
                    </div>
                    <label
                      for="remember"
                      class={tw(
                        "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      )}
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class={tw(
                      "text-sm text-blue-700 hover:underline dark:text-blue-500"
                    )}
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class={tw(
                    "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  )}
                >
                  Login to your account
                </button>
                <div
                  class={tw(
                    "text-sm font-medium text-gray-500 dark:text-gray-300"
                  )}
                >
                  Not registered?{" "}
                  <a
                    href="#"
                    class={tw(
                      "text-blue-700 hover:underline dark:text-blue-500"
                    )}
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
