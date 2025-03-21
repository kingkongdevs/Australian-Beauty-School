export default {
	title: 'Layouts/Checklist',
	tags: ['autodocs']
}

export const Checklist = () => {
	return `
        <section class="py-16 md:py-24 lg:py-28 bg-gray-100">
            <div class="container px-4">
                <div class="flex flex-wrap justify-center mb-5">
                    <div class="w-full md:w-10/12 col-lg-9 text-center mb-5">
                        <h2 class="text-3xl lg:text-4xl mb-4 text-center leading-tight font-bold capitalize">
                            Checklist Section
                        </h2>
                    </div>
    
                    <div class="w-full md:w-10/12 lg:w-8/12">
                        <ul class="m-0 p-0">
                            <li class="flex items-start mb-8">
                                <img width="40" class="min-w-8 md:min-w-10" src="icon-check.svg"/>
                                <p class="mb-0 pl-4"> <strong>Curabitur turpis urna, interdum id metus ac, ullamcorper fringilla velit:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </li>
                            <li class="flex items-start mb-8">
                                <img width="40" class="min-w-8 md:min-w-10" src="icon-check.svg"/>
                                <p class="mb-0 pl-4"> <strong>Curabitur turpis urna, interdum id metus ac, ullamcorper fringilla velit:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </li>
                            <li class="flex items-start mb-8">
                                <img width="40" class="min-w-8 md:min-w-10" src="icon-check.svg"/>
                                <p class="mb-0 pl-4"> <strong>Curabitur turpis urna, interdum id metus ac, ullamcorper fringilla velit:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </li>
                            <li class="flex items-start mb-8">
                                <img width="40" class="min-w-8 md:min-w-10" src="icon-check.svg"/>
                                <p class="mb-0 pl-4"> <strong>Curabitur turpis urna, interdum id metus ac, ullamcorper fringilla velit:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </li>
                            <li class="flex items-start ">
                                <img width="40" class="min-w-8 md:min-w-10" src="icon-check.svg"/>
                                <p class="mb-0 pl-4"> <strong>Curabitur turpis urna, interdum id metus ac, ullamcorper fringilla velit:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const ChecklistWithIcons = () => {
	return `
    <section class="bg-gray-900 text-white">
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="max-w-xl">
                <h2 class="text-3xl font-bold sm:text-4xl">What makes us special</h2>

                <p class="mt-4 text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
                    iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
                    quibusdam, quos fuga minima.
                </p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                </svg>
                </span>

                <div>
                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    `;
};


export const ChecklistWithCards = () => {
	return `
    <section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

      <p class="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        href="#"
        class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>
    `;
}

export const BlockChecklist = () => {
	return `
    <section class="relative">
        <div class="container">
            <div class="flex flex-wrap justify-center mb-3 view-animation fade-up">
                <div class="w-full">
                    <div class="flex h-full md:shadow-lg p-3 md:p-6 lg:p-8 lg:text-xl bg-white rounded-lg">
                        <div class="flex-shrink-0 mr-3">
                            <img src="icon-checkmark-green.png" class="w-8 h-auto inline-block" alt="checkmark icon">
                        </div>
                        <div class="flex-grow pt-2">
                            <h3 class="text-lg lg:text-2xl font-semibold leading-tight mb-4">
                                Unleash the Power of Quantum Vibrations
                            </h3>
                            <p>
                                Discover a revolutionary way to energize your mind and body using cutting-edge quantum techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center mb-3 view-animation fade-up">
                <div class="w-full">
                    <div class="flex h-full md:shadow-lg p-3 md:p-6 lg:p-8 lg:text-xl bg-white rounded-lg">
                        <div class="flex-shrink-0 mr-3">
                            <img src="icon-checkmark-green.png" class="w-8 h-auto inline-block" alt="checkmark icon">
                        </div>
                        <div class="flex-grow pt-2">
                            <h3 class="text-lg lg:text-2xl font-semibold leading-tight mb-4">
                                Advanced Neural Alignment Technology
                            </h3>
                            <p>
                                Align your neural pathways for optimal performance with innovative solutions supported by groundbreaking research.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center mb-3 view-animation fade-up">
                <div class="w-full">
                    <div class="flex h-full md:shadow-lg p-3 md:p-6 lg:p-8 lg:text-xl bg-white rounded-lg">
                        <div class="flex-shrink-0 mr-3">
                            <img src="icon-checkmark-green.png" class="w-8 h-auto inline-block" alt="checkmark icon">
                        </div>
                        <div class="flex-grow pt-2">
                            <h3 class="text-lg lg:text-2xl font-semibold leading-tight mb-4">
                                Innovative Magnetic Resonance
                            </h3>
                            <p>
                                Harness the potential of magnetic resonance fields to boost your mental clarity and focus effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center mb-3 view-animation fade-up">
                <div class="w-full">
                    <div class="flex h-full md:shadow-lg p-3 md:p-6 lg:p-8 lg:text-xl bg-white rounded-lg">
                        <div class="flex-shrink-0 mr-3">
                            <img src="icon-checkmark-green.png" class="w-8 h-auto inline-block" alt="checkmark icon">
                        </div>
                        <div class="flex-grow pt-2">
                            <h3 class="text-lg lg:text-2xl font-semibold leading-tight mb-4">
                                Certified Safe and Reliable
                            </h3>
                            <p>
                                Feel secure knowing this technology meets the highest safety standards and delivers reliable results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center mb-3 view-animation fade-up">
                <div class="w-full">
                    <div class="flex h-full md:shadow-lg p-3 md:p-6 lg:p-8 lg:text-xl bg-white rounded-lg">
                        <div class="flex-shrink-0 mr-3">
                            <img src="icon-checkmark-green.png" class="w-8 h-auto inline-block" alt="checkmark icon">
                        </div>
                        <div class="flex-grow pt-2">
                            <h3 class="text-lg lg:text-2xl font-semibold leading-tight mb-4">
                                Outpaces Traditional Methods
                            </h3>
                            <p>
                                Achieve unparalleled efficiency and effectiveness with methods that go beyond conventional techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
};

export const LinkedList = () => {
  return `
    <section class="px-[10px] py-8">
      <div class="max-w-[600px] mx-auto [&>div:last-child>div:first-child>div:before]:hidden">
          <div class="flex relative">
              <div class="h-full before:w-2px">
                  <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,100,200,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,100,200,0.3)] after:relative after:z-[2] after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]"></div>
              </div>
              <div class="pl-[30px]">
                  <h3 class="font-bold text-xl mb-1">
                      The title text
                  </h3>
                  <p class="pb-[60px]">
                      the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                  </p>
              </div>
          </div>
          <div class="flex relative">
              <div class="h-full before:w-2px">
                  <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,100,200,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,100,200,0.3)] after:relative after:z-[2] after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]"></div>
              </div>
              <div class="pl-[30px]">
                  <h3 class="font-bold text-xl mb-1">
                      The title text
                  </h3>
                  <p class="pb-[60px]">
                      the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                  </p>
              </div>
          </div>
          <div class="flex relative">
              <div class="h-full before:w-2px">
                  <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,100,200,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,100,200,0.3)] after:relative after:z-[2] after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]"></div>
              </div>
              <div class="pl-[30px]">
                  <h3 class="font-bold text-xl mb-1">
                      The title text
                  </h3>
                  <p class="pb-[60px]">
                      the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph consider your lorem ipsummed friend paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                  </p>
              </div>
          </div>
          <div class="flex relative">
              <div class="h-full before:w-2px">
                  <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,100,200,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,100,200,0.3)] after:relative after:z-[2] after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]"></div>
              </div>
              <div class="pl-[30px]">
                  <h3 class="font-bold text-xl mb-1">
                      The title text
                  </h3>
                  <p class="pb-[60px]">
                      the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                  </p>
              </div>
          </div>
      </div>
  </section>
  `
};