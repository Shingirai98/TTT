import styles from './page.module.css';

export default function BookingSession(){
    return(
        <>
          <h1 className={styles.titleText}>Book<span> A </span>Session</h1>
          <h3>Session and duration of cost</h3>

          <div className={styles.tablets}>
            <div className={styles.tablet}>
                <p>A complete program with one client or a group of clients would be covered over a period of either three (3)or
                    six months. They would be spread over the year as weekly or fortnightly sessions. The actual cost for each
                    coaching program will be calculated based on the number of people enrolled and a quotation submitted on
                    request.
                </p>
            </div>
            <div className={styles.tablet}>
                <p>Special workshops, seminars and conferences are conducted as per client request and costs according to the
                    number of participants and days taken.
                </p>
            </div>
            <div className={styles.tablet}>
                <p>Traveling costs are based based on the rate offered by the institution rendering services to and no less than the
                    SARS rate per km.
                </p>
            </div>
          </div>
          <p>All prices quoted are exclusive of VAT as the company is currently not registered a VAT vender.</p>
          <div className={styles.parentqoute}>
            <a href="mailto:hello.ttt@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className={styles.qoutation}>Request a quotation</button>
            </a>
          </div>

        
        </>
    )
}