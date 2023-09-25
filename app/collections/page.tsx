import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <div className='max-container grid grid-cols-[250px_1fr] gap-3 py-3'>
            <div className='filter-box bg-gray-50 p-3 dark:bg-zinc-900'>
                Filter
            </div>
        </div>
    )
}

export default Page
