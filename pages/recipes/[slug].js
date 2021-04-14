import React from 'react'
import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type : 'recipe'
    })
    
    const paths = res.items.map(item => {
        return {
            params: {
                slug:item.fields.slug
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'recipe',
        'fields.slug' : params.slug
    })

    return {
        props: { recipe: items[0] },
        revalidate: 1
    }
}

export default function RecipeDetails({ recipe }) {
    
    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
    
    return (
        <div>
            <h1 className="flex justify-between items-center text-4xl border-b-2 border-purple-600 text-center w-full pb-2 mb-5 border-purple-700">
                {title}
                <span className="text-base">Cooking Time : <strong>{cookingTime}</strong> min.</span>
            </h1>
            <div className="flex flex-wrap overflow-hidden space-x-4">

                <div className="overflow-hidden flex-1">
                    <Image
                        src={'https:' + featuredImage.fields.file.url}
                        alt={title}
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                    />
                </div>

                <div className="w-6/12 flex flex-wrap flex-col">
                    <h1 className="text-4xl border-b-2 text-center w-full pb-2 border-purple-500">Ingredients</h1>
                    <ul className="list-inside list-decimal py-5">
                        {
                            ingredients.map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                    <h1 className="text-4xl border-b-2 text-center w-full pb-2 border-purple-300">Method</h1>
                    <div>
                        {documentToReactComponents(method)}
                    </div>

                    <div className="text-center">
                        <h2 className="text-6xl font-bold text-purple-800">Ready to eat!</h2>
                        <h4 className="bg-purple-400 text-yellow-200 my-5 font-bold text-4xl py-3">Bon appetite</h4>
                    </div>

                </div>

            </div>
        </div>
    )
}
