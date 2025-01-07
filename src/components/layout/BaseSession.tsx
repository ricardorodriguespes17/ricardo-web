type Props = {
  children: React.ReactNode
}

const BaseSession = (props: Props) => {
  return (
    <div className="w-full px-[10%] pt-16 pb-24 flex flex-col justify-center border-t border-t-gray-30 dark:border-t-green-light/20">
      {props.children}
    </div>
  )
}

export default BaseSession
