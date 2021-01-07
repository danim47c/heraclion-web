import Header from "components/layout/header"
import { FC } from "react"
import Head from "next/head"

const defaultTitle = "Heraclion"
const titleTemplate = ` - ${defaultTitle}`

interface LayoutProps {
  className?: string
  containerClassName?: string

  title?: string
  disableTitleTemplate?: boolean
  disableHeader?: boolean
}

const Layout: FC<LayoutProps> = ({
  children,

  className,
  containerClassName,

  title,
  disableTitleTemplate,
  disableHeader,
}) => {
  const finalTitle = `${title || defaultTitle} ${
    title && !disableTitleTemplate ? titleTemplate : ""
  }`

  return (
    <div
      className={`w-screen min-h-screen flex items-center flex-col ${containerClassName}`}
    >
      <Head>
        <title>{finalTitle}</title>
      </Head>

      {!disableHeader && <Header />}

      <div className={`w-full  ${className}`}>{children}</div>
    </div>
  )
}

export default Layout
