import styles from "./profile.module.css"

function Profile(){
    return(
        <div className={styles.profile}>
        <img className={styles.hat} src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"/>

          <img className={styles.avatar} src="https://i.stack.imgur.com/ZME5U.jpg"/>

          <div className={styles.description}>
            <div>
              name
            </div>

            <div>
              description
            </div>
          </div>

            <div className={styles.posts}>
                My Posts
                <div className={styles.item}>Post 1</div>
                <div className={styles.item}>Post 2</div>
                <div className={styles.item}>Post 3</div>
                <div className={styles.item}>Post 4</div>
            </div>
        </div>
    )
}

export default Profile