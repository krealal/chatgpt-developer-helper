import { useRef, useState, useEffect } from 'react'

type DropdownProps = {
  title: string
  items: {
    label: string
  }[]
}

export default function Dropdown(props: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [dropdownRef])

  const toggleDropdown = () => setIsActive(!isActive)

  return (
    <div>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
        onClick={toggleDropdown}
      >
        {props.title}
      </button>

      <div
        id='dropdown'
        ref={dropdownRef}
        className={`z-10 ${
          isActive ? '' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefaultButton'
        >
          {props.items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
