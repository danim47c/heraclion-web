import useScrollCondition from "lib/useScrollCondition"
import { FC, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMedia } from "react-use"
import { MdMenu } from "react-icons/md"

interface Page {
  name: string
  url: string
}

const PAGES: Page[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Team",
    url: "/team",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
]

const Header: FC = () => {
  const { pathname } = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const toggleOpen = () => setOpen((open) => !open)

  const hasScrolled = useScrollCondition((y) => y > 0)
  const isMobile = useMedia("(max-width: 768px)")

  const isActivePage = (url: string): boolean => pathname === url

  return (
    <header
      className={`transition-all duration-500 text-white sticky top-0 w-screen bg-black font-bold ${
        hasScrolled ? "bg-opacity-70" : "bg-opacity-25"
      } px-5 pt-2 pb-3 text-3xl mb-3`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">Heraclion</Link>
        {isMobile ? (
          <button onClick={toggleOpen}>
            <MdMenu />
          </button>
        ) : (
          <div className="flex items-center text-xl font-semibold gap-x-5">
            {PAGES.map((page) => (
              <Link href={page.url} key={page.url} passHref>
                <a
                  key={page.url}
                  className={`${isActivePage(page.url) && "underline"}`}
                >
                  {page.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div className="flex flex-col items-center justify-center my-4 text-2xl font-semibold gap-y-3">
          {PAGES.map((page) => (
            <Link href={page.url} key={page.url} passHref>
              <a
                key={page.url}
                className={`${isActivePage(page.url) && "underline"}`}
              >
                {page.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
