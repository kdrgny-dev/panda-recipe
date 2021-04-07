import React from 'react'
import { createClient } from 'contentful'

export async function getStaticProps(context) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'recipe', "fields.slug": context.params.slug })
        .then((response) => response.items)

    // Since `slug` was set to be a unique field, we can be confident that
    // the only result in the query is the correct post.
    const post = res.pop()

    // If nothing was found, return an empty object for props, or else there would
    // be an error when Next tries to serialize an `undefined` value to JSON.
    if (!post) {
        return { props: {} }
    }

    return {
        props: {
            post,
        }
    }
}

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const posts = await client.getEntries({ content_type: 'recipe' })
        .then((response) => response.items)

    const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}

export default function RecipeDetails({post}) {
    return (
        <div>
            <h1 className="text-4xl border-b-2 border-purple-600 text-center w-full pb-2 mb-5 border-purple-700">{post.fields.title}</h1>
            <div className="flex flex-wrap overflow-hidden space-x-4">

                <div className="overflow-hidden flex-1">
                    <img src={post.fields.featuredImage.fields.file.url} alt="" />
                </div>

                <div className="w-6/12 flex flex-wrap flex-col">
                    <h1 className="text-4xl border-b-2 text-center w-full pb-2 border-purple-500">Ingredients</h1>
                    <ul className="list-inside list-decimal py-5">
                        {
                            post.fields.ingredients.map(item => (
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                    <h1 className="text-4xl border-b-2 text-center w-full pb-2 border-purple-300">Method</h1>
                    {
                        post.fields.method.content.map(content => (
                            <p className="py-2">{content.content[0].value}</p>
                        ))
                    }

                    <div className="text-center">
                        <h2 className="text-6xl font-bold text-purple-800">Ready to eat!</h2>
                        <h4 className="bg-purple-400 text-yellow-200 my-5 font-bold text-4xl py-3">Bon appetite</h4>
                    </div>

                </div>

            </div>
        </div>
    )
}
