import Link from "next/link";
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

async function getBlogs(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const blogs = await fetch('http://127.0.0.1:8090/api/collections/blogsNew/records', {cache : 'no-store'});
    const data = await blogs.json();
    return data?.items as any[];
}

async function getBlogCategories(){
    const blog_categories = await fetch('http://127.0.0.1:8090/api/collections/blog_categories/records', {cache : 'no-store'});
    const data = await blog_categories.json();
    return data?.items as any[];
}

export default async function Categories({
    params,
}: {
    params: {title: string };
}){
    const blogs = await getBlogs();
    const categories = await getBlogCategories(); 
    const decodedURL = decodeURIComponent(params.title)   
    const selectedCategoryName = categories.filter((item) => item.title === decodedURL)
    const categoryID = await selectedCategoryName[0].id;
    const filteredBlogs = blogs.filter((item) => item.blog_cat === categoryID)
    
    return (
        <div>
            <h1 className={styles.pageTitle}>{decodedURL} <span>Blogs</span></h1>
            <div className={styles.tabletContainer}>
                {filteredBlogs?.map((filteredBlog) => {
                    return <FilteredBlogs key={filteredBlog.id} filteredBlog={filteredBlog}/>
                })}
            </div>
            <Link href={`/blog_categories`}>
                    <div className={styles.returnButton}>
                        <button className={styles.backButton}>Go back to list</button>
                    </div>
            </Link>
        </div>
    );
}
function FilteredBlogs({filteredBlog}: any){
    const {id, title, summary, blog_image} = filteredBlog || {}
    const picID = filteredBlog['id']
    const stringImageURL = filteredBlog['blog_image']
    const url = "http://127.0.0.1:8090/api/files/blogsNew/" + picID + "/" + stringImageURL
    return(
        
            <Link href={`/blogs/${id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.tablets}>
                    <div className={styles.tablet}>
                        <div className={styles.textArea}>
                            <div>
                                <h2>{title}</h2>
                            </div>
                        
                        <p>{summary}</p>
                        </div>
                        <img src={url} alt="Image description" className={styles.profilePic}/>
                    </div>
                </div>
            </Link>   
    )
}