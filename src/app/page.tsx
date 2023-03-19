
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'



const inter = Inter({ subsets: ['latin'] })

async function getFeedback() {
  const feedback = await fetch('http://127.0.0.1:8090/api/collections/review/records', {cache : 'no-store'});
  const data = await feedback.json();
  return data?.items as any[];
}


export default async function Home() {
  const feedback = await getFeedback();
  
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>Talk <span>To </span>Tobo</h1>
      <section className={styles.hero}>
        <div className={styles.callToAction}>
          <div className={styles.heroText}>Make success <br/>your middle <br/>name</div>
          <p>Do you want to change your life? Take the first step by clicking the button below</p>
          <a href="booking_session"><button>Book a session</button></a>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/images/heroImage.png" 
            alt="Hero image"
            width={500}
            height={500}>
          </Image>
        </div>
      </section>
      <section className={styles.motivation}>
        <div className={styles.header}>
          Why Choose Talk To Tobo?
        </div>
        <p>As I work with leaders from organizations in the corporate world, small businesses, associations and all levels of
government, what I consistently see is a collective desire to respond to on-going change and disruption with less
struggle and anxiety.</p>
      </section>
      
      <section className={styles.tablets}>
        <div className={styles.tablet}>
          <div className={styles.tabletTitle}>Vision</div>
          <p className={styles.tabletDescription}>
            Emotionally intelligent clients who intentionally live fulfilled lives with a clear purpose.
            By equipping our clients with the tools they need to succeed, we believe that they can make a meaningful impact on the world around them and inspire others to do the same. 
          </p>
        </div>
        <div className={styles.tablet}>
          <div className={styles.tabletTitle}>Mission</div>
          <p className={styles.tabletDescription}>
          We are a trendsetting and innovative coaching company committed to ensuring that out clients realize their full potential, experience continuous growth, excel in everything they do, find fulfillment and live their lives of purpose.</p>
        </div>
        <div className={styles.tablet}>
          <div className={styles.tabletTitle}>Values</div>
          <p className={styles.tabletDescription}>
            RESPECT.
GROW and EXCELL.
COMMITTED and ACCESSIBLE.
PROFESSIONALISM, CONFIDENTIALITY and INTEGRITY.
LIFE TRANSFORMATION through THOUGHT TRANSFORMATION.</p>
        </div>
      </section>
      
      <div>
        {feedback?.map((feedbackInstance) =>{
          return <FeedBackCarousel key={feedbackInstance.id} feedbackInstance={feedbackInstance}/>
        })}
      </div>
      
    </main>
  )
}

function FeedBackCarousel({feedbackInstance}: any){
  const {id, authorName, reviewComment, profilePic} = feedbackInstance || {}
  const picID = feedbackInstance['id'] 
  const stringArtist = feedbackInstance['profilePic']
  const url = "http://127.0.0.1:8090/api/files/review/" + picID + "/" + stringArtist

  return(
    <>
      <section className={styles.reviews}>
        <img src={url} alt="Image description" className={styles.profilePic}/>
        <div className={styles.comment}>
          <p>&ldquo;{reviewComment}&rdquo;</p>
          <p className={styles.authorName}>-{authorName}</p>
        </div>
      </section>
    </>
  )
}
