import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function RecipeCard({ recipe }) {
    const {title, slug, thumbnail} = recipe.fields
    return (
        <div className="wrapper antialiased text-gray-900">
            <Link href={`/recipes/${slug}`} as={`/recipes/${slug}`}>
                <a>
                    <div>

                        <Image
                            src={'https:' + thumbnail.fields.file.url}
                            alt={title}
                            className="rounded-lg filter grayscale hover:filter-none transition duration-500 ease-in-out"
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                        />

                        <div className="relative mt-2">
                            <div className="bg-gradient-to-r from-purple-500 p-6 rounded-lg shadow-lg">
                                <h4 className="mt-1 text-yellow-400 text-xl font-semibold uppercase leading-tight truncate">{title}</h4>
                            </div>
                        </div>

                    </div>
                </a>
            </Link>
        </div>
    )
}
