// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'

// import required modules
import { Pagination } from 'swiper/modules';
import { LuIceCream2 } from "react-icons/lu";
import SectionHeading from '../../CommonComponents/SectionHeading'


const Testimonials = () => {
  return (
    <div className=' testimonials-section'>
      <div className=' section'>
        <SectionHeading
          icon={<LuIceCream2 />}
          title='Testimonials'
        />


        <div className=' py-16'>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className=' text-white text-center space-y-10'>
                <p className=' text-5xl'>“</p>
                <p className=' font-semibold'>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                <p><span className='font-semibold text-main-color'>Ted Chapman</span>, Client</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=' text-white text-center space-y-10'>
                <p className=' text-5xl'>“</p>
                <p className=' font-semibold'>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                <p><span className='font-semibold text-main-color'>Ted Chapman</span>, Client</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=' text-white text-center space-y-10'>
                <p className=' text-5xl'>“</p>
                <p className=' font-semibold'>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                <p><span className='font-semibold text-main-color'>Ted Chapman</span>, Client</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Testimonials