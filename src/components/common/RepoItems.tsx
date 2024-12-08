"use client"

const RepoItems = () => {
  const repos = new Array(8)
    .fill("Reposotório")
    .map((item, index) => `${item} ${index + 1}`)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 max-h-[300px] overflow-auto">
      {repos.map((item, index) => (
        <div
          key={index}
          className="flex h-fit flex-col gap-1 py-4 px-6 rounded-lg bg-gray-30 dark:bg-dark-100"
        >
          <h4>{item}</h4>
          <p className="text-sm text-gray-80 dark:text-gray-50">Descrição</p>
        </div>
      ))}
    </div>
  )
}

export default RepoItems
