import { twMerge } from "tailwind-merge"

type Props = {
  available?: boolean
}

const Point = ({ available = true }: Props) => {
  const pointsClassName = available
    ? "bg-green-dark dark:bg-emerald-300"
    : "bg-red-500"

  return (
    <div
      className={twMerge(
        "rounded-full w-3 aspect-square flex items-center justify-center",
        pointsClassName
      )}
    >
      <div
        className={twMerge(
          "rounded-full w-4 aspect-square opacity-90",
          available && "animate-ping",
          pointsClassName
        )}
      />
    </div>
  )
}

export default Point
