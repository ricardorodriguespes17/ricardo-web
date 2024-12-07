import Link, { LinkProps } from "next/link"
import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "solid" | "outlined" | "plain"
  size?: "sm" | "md"
  href?: string
  target?: HTMLAttributeAnchorTarget
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  solid:
    "bg-dark-100 text-white hover:bg-dark-90 dark:bg-green-dark dark:text-dark-90 hover:bg-green-light",
  outlined:
    "border border-dark-100 text-dark-100 bg-transparent text-inhreit hover:bg-dark-90 hover:text-white",
  plain: "text-dark-100 bg-transparent text-inhreit",
}

const sizes = {
  sm: "py-3 px-5 font-sm",
  md: "p-4 font-lg",
}

const Button = (props: Props) => {
  const { variant = "solid", size = "md", href, target, ...rest } = props

  const className = twMerge(
    "rounded-xl w-fit h-fit transition-all font-semibold hover:font-bold",
    variants[variant],
    sizes[size]
  )

  if (href) {
    return (
      <Link className={className} href={href} target={target}>
        {rest.children}
      </Link>
    )
  }

  return <button className={className} {...rest} />
}

export default Button
