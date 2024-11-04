'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const footer = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div class="flex min-h-full flex-col">
        <header class="mx-auto w-full max-w-7xl px-6 pt-6 lg:px-8">
          <nav aria-label="Global" class="flex items-center justify-between">
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  class="h-8"
                />
              </a>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" class="h-6 w-6" />
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} class="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <DialogPanel class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    class="h-8"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  class="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" class="h-6 w-6" />
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div class="py-6">
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <main class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
          <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
          <h1 class="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Page not found
          </h1>
          <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10">
            <a href="#" class="text-sm font-semibold leading-7 text-indigo-600">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" class="border-t border-gray-200">
          <h2 id="footer-heading" class="sr-only">
            Footer
          </h2>
          <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
              <img
                alt="Company name"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                class="h-7"
              />
              <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      {footer.solutions.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="mt-10 md:mt-0">
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      {footer.support.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      {footer.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="mt-10 md:mt-0">
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                    <ul role="list" class="mt-6 space-y-4">
                      {footer.legal.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
