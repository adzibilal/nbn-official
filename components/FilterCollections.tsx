import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Props {}

const FilterCollections: NextPage<Props> = ({}) => {
    const searchParams = useSearchParams()
    const categoryString = searchParams?.get('category') || ''
    const categories = categoryString.split(',')
    const [selectedCategories, setSelectedCategories] = useState(categories)
    const router = useRouter()

    useEffect(() => {
        setSelectedCategories(categories)
    }, [categoryString])

    const handleCategoryChange = (category: string) => {
        let updatedCategories
        if (selectedCategories.includes(category)) {
            updatedCategories = selectedCategories.filter(
                item => item !== category
            )
        } else {
            updatedCategories = [...selectedCategories, category]
        }
        setSelectedCategories(updatedCategories)

        // Perbarui URL saat checkbox diklik
        const categoryParam = updatedCategories.join(',')
        router.push(`/collections?category=${categoryParam}`)
    }

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
                            {[
                                'Sweater',
                                'Jaket',
                                'Rajut',
                                'Dress',
                                'One Set',
                                'Faux Fur',
                                'New Product'
                            ].map(category => (
                                <label
                                    className='cursor-pointer label flex gap-3 justify-start'
                                    key={category}>
                                    <input
                                        type='checkbox'
                                        className='checkbox checkbox-sm'
                                        onChange={() =>
                                            handleCategoryChange(category)
                                        }
                                        checked={selectedCategories.includes(
                                            category
                                        )}
                                    />
                                    <span className='label-text'>
                                        {category}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterCollections
