import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Đức Chúa Trời yêu bạn!</h1>
    <Fade>
      <h3>Tình Yêu Thương của Đức Chúa Trời</h3>
      <p>
        Vì Thượng Đế quá yêu nhân loại đến nỗi hi sinh Con Một của Ngài, để ai
        đặt niềm tin vào Con ấy sẽ không bị chết mất nhưng được sống đời đời.
        (GIĂNG 3:16 BPT)
      </p>
      <h3>Chương Trình của Đức Chúa Trời</h3>
      <p>
        Chúa Cứu Thế Giê-xu phán rằng: "Ta đến để cho nhân loại được sự sống, và
        được sự sống dư dật" (GIĂNG 10:10b BPT)
      </p>
    </Fade>
    <Link to="/who-is-jesus/">Giê-xu là ai?</Link>
  </div>
)

export default IndexPage
