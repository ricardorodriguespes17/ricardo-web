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
  solid: "bg-dark-100 text-white hover:bg-dark-90",
  outlined:
    "border border-dark-100 text-dark-100 bg-transparent hover:bg-dark-90 hover:text-white",
  plain: "text-dark-100 bg-transparent hover:font-bold",
}

const sizes = {
  sm: "py-2 px-5",
  md: "p-4",
}

const Button = (props: Props) => {
  const { variant = "solid", size = "md", href, target, ...rest } = props

  const className = twMerge(
    "rounded-xl w-fit transition-all",
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
