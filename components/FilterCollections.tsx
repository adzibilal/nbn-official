import { NextPage } from 'next'

interface Props {}

const FilterCollections: NextPage<Props> = ({}) => {
    return (
        <div className='filter-box bg-gray-50 p-3 dark:bg-zinc-900 pb-6'>
            <div className='font-semibold mb-2'>Filter</div>
            <hr />
            <div className=''>
                <div className='collapse collapse-arrow !rounded-none'>
                    <input type='checkbox' name='my-accordion-2' />
                    <div className='collapse-title !pl-0'>Category</div>
                    <div className='collapse-content !p-0 flex flex-col -mt-2'>
                        <div className='form-control'>
                            <label className='cursor-pointer label flex gap-3 justify-start'>
                                <input
                                    type='checkbox'
                                    className='checkbox checkbox-sm'
                                />
                                <span className='label-text'>Remember me</span>
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className='cursor-pointer label flex gap-3 justify-start'>
                                <input
                                    type='checkbox'
                                    className='checkbox checkbox-sm'
                                />
                                <span className='label-text'>Remember me</span>
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className='cursor-pointer label flex gap-3 justify-start'>
                                <input
                                    type='checkbox'
                                    className='checkbox checkbox-sm'
                                />
                                <span className='label-text'>Remember me</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterCollections
