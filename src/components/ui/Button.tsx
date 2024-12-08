import Link, { LinkProps } from "next/link"
import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "solid" | "outlined" | "plain"
  size?: "xs" | "sm" | "md" | "full"
  href?: string
  target?: HTMLAttributeAnchorTarget
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  solid: twMerge(
    "bg-dark-100 text-white hover:bg-dark-90 dark:bg-green-dark",
    "dark:text-dark-90 dark:hover:bg-green-light hover:bg-dark-90"
  ),
  outlined: twMerge(
    "border-dark-100 dark:border-green-light text-dark-100 bg-transparent text-inhreit",
    "hover:bg-dark-90 dark:hover:bg-green-light hover:text-white dark:hover:text-dark-100"
  ),
  plain: "text-dark-100 bg-transparent text-inhreit hover:opacity-85",
}

const sizes = {
  xs: "p-2 gap-2 font-sm",
  sm: "p-3 gap-3 font-sm",
  md: "p-4 gap-4 font-lg",
  full: "p-4 justify-between font-lg w-full",
}

const Button = (props: Props) => {
  const {
    variant = "solid",
    size = "md",
    href,
    target,
    className: baseClassName,
    ...rest
  } = props

  const className = twMerge(
    "border border-transparent rounded-xl w-fit h-fit transition-all",
    "font-semibold hover:font-bold flex items-center justify-center",
    variants[variant],
    sizes[size],
    baseClassName
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
