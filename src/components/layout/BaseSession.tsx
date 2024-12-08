type Props = {
  children: React.ReactNode
}

const BaseSession = (props: Props) => {
  return (
    <div className="w-full px-40 pt-16 pb-24 flex flex-col justify-center border-t border-t-dark-100 dark:border-t-green-light">
      {props.children}
    </div>
  )
}

export default BaseSession
