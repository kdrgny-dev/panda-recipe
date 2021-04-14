import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'recipe' })

    return {
        props: {
            recipes: res.items
        },
        revalidate: 1
    }
}

export default function Home({ recipes }) {
    console.log(recipes)
    return (
        <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
                {
                    recipes.map(recipe => (

                        <RecipeCard key={recipe.fields.title} recipe={recipe}/>

                    ))
                }
            </div>
        </div>
    )
}
