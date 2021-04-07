import { createClient } from 'contentful'
import Link from 'next/link'
import RecipeCard from '../components/RecipeCard'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'recipe' })

    return {
        props: {
            recipes: res.items
        }
    }
}

export default function Home({ recipes }) {
    console.log(recipes)
    return (
        <div className="space-y-2">
            <div className={styles.recipes_wrapper}>
                {
                    recipes.map(recipe => (

                        <RecipeCard key={recipe.fields.title} recipe={recipe}/>

                    ))
                }
            </div>
        </div>
    )
}
