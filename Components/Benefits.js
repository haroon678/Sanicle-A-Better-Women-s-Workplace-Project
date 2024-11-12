'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Benefits = () => {
    let [categories] = useState({
        Health: [
          {
            id: 1,
            title: 'Virtual & Primary Care',
            src: "/medical.png",
            alt: "medical"
          },
          {
            id: 2,
            title: "Genetic Testing",
            src: "/blood-test.png",
            alt: "testing"
          },
          {
            id: 3,
            title: "Caregiving and pet care",
            src: "/medical1.png",
            alt: "caregiving"
          },
          {
            id: 4,
            title: "Cardiac care",
            src: "/monitor.png",
            alt: "monitor"
          },
        ],
        Wellness: [
          {
            id: 1,
            title: 'Sleep',
            src: '/sleep.png',
            alt: "sleep"
          },
          {
            id: 2,
            title: 'Nutrition & weight management',
            src: '/salad.png',
            alt: "salad"
          },
          {
            id: 3,
            title: 'Mental health & wellbeing',
            src: '/mental-health.png',
            alt: "mental"
          },
          {
            id: 4,
            title: 'Fitness program',
            src: '/fitness.png',
            alt: "fitness"
          },
        ],
      })
  return (
    <section className='w-full p-1'>
        <div className="w-full px-2 md:px-4 lg:px-32 xl:px-60">
        <Tab.Group>
  <Tab.List className="flex space-x-1 rounded-xl p-1 ">
    {Object.keys(categories).map((category) => (
      <Tab
        key={category}
        className={({ selected }) =>
          classNames(
            'w-full py-2.5 text-sm font-medium leading-5',
            '',
            selected
              ? 'text-blue-50 border-b-2 border-blue-50'
              : 'text-black border-b-2 border-black '
          )
        }
      >
        {category}
      </Tab>
    ))}
  </Tab.List>
  <Tab.Panels className="mt-2">
    {Object.values(categories).map((posts, idx) => (
      <Tab.Panel
        key={idx}
        className={classNames(
          'rounded-xl bg-white p-3',
          ''
        )}
      >
        <ul className='w-full flexCenter flex flex-col gap-2 sm:flex-row'>
          {posts.map((post) => (
            <li
              key={post.id}
              className="relative  rounded-md p-3 min-h-20 w-full md:w-1/4 md:min-h-28 bg-blue-60"
            >
              <div className="flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium leading-5">
                    {post.title}
                  </h3>
                </div>
              </div>
              {/* Optional link overlay */}
              {/* <a
                href="#"
                className={classNames(
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                )}
              /> */}
            </li>
          ))}
        </ul>
      </Tab.Panel>
    ))}
  </Tab.Panels>
</Tab.Group>

        </div>
    </section>

  )
}

export default Benefits
