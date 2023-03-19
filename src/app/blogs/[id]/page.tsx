import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
async function getBlogs(){
    const blogs = await fetch('http://127.0.0.1:8090/api/collections/blogsNew/records', {cache : 'no-store'});
    const data = await blogs.json();
    return data?.items as any[];
}

export default async function getBlog({
    params,
}: {
    params: {id: string};
}){
    const blogs = await getBlogs();
    const targetBlog = blogs.find((item) => item.id === params.id)
    
    return(
        <div>
            <BlogView targetBlog= {targetBlog}/>
        </div>
    );
}



function BlogView( {targetBlog}: any){
    const {id, title, summary, content, profilePic} = targetBlog || {}
    const picID = targetBlog['id']
    const stringImageURL = targetBlog['blog_image']
    const url = "http://127.0.0.1:8090/api/files/blogsNew/" + picID + "/" + stringImageURL
    return(
        <>
        <div className="blog-view">
            <h1 className={styles.blogTitle}>{title}</h1>
            <div className={styles.blogImage}>
                <img src={url} alt="Image description" className={styles.profilePic}/>
            </div>
            <div className={styles.blogContent}>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            
                <Link href={`/blog_categories`}>
                    <div className={styles.returnButton}>
                        <button className={styles.backButton}>Go back to list</button>
                    </div>
                </Link>
            </div>
        </>
    );
}