import { RepositoryType } from "@/@types/RepositoryType"

type Props = {
  repositories: RepositoryType[]
}

const RepoItems = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
      {props.repositories.slice(0, 8).map((repo, index) => (
        <div
          key={index}
          className="flex max-h-[200px] flex-col gap-1 py-4 px-6 rounded-lg bg-gray-30 dark:bg-dark-100"
        >
          <a href={repo.html_url} target="_blank">
            <h4>{repo.name}</h4>
          </a>
          <p className="text-sm text-gray-80 dark:text-gray-50">
            {repo.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default RepoItems
