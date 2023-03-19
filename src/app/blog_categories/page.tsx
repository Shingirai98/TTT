import Link from "next/link";
import styles from './page.module.css'

async function getCategories(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/blog_categories/records');
    const data = await res.json();
    return data?.items as any[];
}

export default async function Categories(){
    const categories = await getCategories();
    return (
        <div>
            <h1 className={styles.pageTitle}>Categories Page</h1>
            
            <div className={styles.tablets}>
                {categories?.map((category) => {
                    return <Category key={category.id} category={category} />

                })}
            </div>
        </div>
    );
}

function Category( {category}: any){
    const {id, title, num_blogs} = category || {}

    return(
        <>
        
            <div className={styles.tablet}>
                <div className={styles.categoryTitle}>{title}</div>
                <div className={styles.description}>
                    This is a tablet containing the Category Enlisted above. Please press the button below to view the corresponding blogs
                </div>
                <Link href={`/blog_categories/${title}`}>
                    <div  className={styles.categoryButton}>
                        <button>
                            View Blogs
                        </button>
                    </div>    
                </Link>
            </div>
        
        </>
    )
}