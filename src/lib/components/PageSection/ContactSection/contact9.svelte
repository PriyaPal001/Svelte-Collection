<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">Contact us</h2>
  
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden bg-indigo-700 px-6 py-10 sm:px-10 xl:p-12">
            <div class="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
              <svg class="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block" aria-hidden="true">
              <svg class="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white">Contact information</h3>
            <p class="mt-6 max-w-3xl text-base text-indigo-50">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Phone number</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="h-6 w-6 flex-shrink-0 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span class="ml-3">+1 (555) 123-4567</span>
              </dd>
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="h-6 w-6 flex-shrink-0 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="ml-3">support@workcation.com</span>
              </dd>
            </dl>
            <ul role="list" class="mt-8 flex space-x-12">
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="#">
                  <span class="sr-only">X</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
  
          <!-- Contact form -->
          <div class="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
            <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
                <div class="mt-1">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
                <div class="mt-1">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                  <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
                </div>
                <div class="mt-1">
                  <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="phone-optional">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
                <div class="mt-1">
                  <input type="text" name="subject" id="subject" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                  <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="message-max"></textarea>
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  