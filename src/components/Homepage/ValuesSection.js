import * as React from "react"
import TextBox from "../textbox"
import { ValueGrid } from '../../styles/pages/home.module.scss'

const ValuesSection = (props) => {

  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <TextBox width={624}>
            <h2>OUR VALUES</h2>
            <p>Imperdiet gravida viverra convallis et dolor at viverra. Nascetur at euismod consectetur id amet. Pellentesque maecenas sed pretium cras blandit ullamcorper id tortor sem. Nisl pretium ac amet diam feugiat nisl elit a. Mi mattis lorem libero dignissim.</p>
          </TextBox>
          <div>
            <div className={ValueGrid}>
              <div>
                <p className="Subtitle-2">SAFETY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">PERFORMANCE</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">QUALITY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">RELIABILITY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection