/* eslint-disable react/prop-types */
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const ClientReviewCard = ({client}) => {
     const {name, image, review_text, designation} = client
    return (
        <div className="relative bg-base-100 p-5 pt-12 border-2 shadow-xl">
            <figure className="w-12 absolute -top-8 left-5">
                <img className="w-full rounded-full" src={image} alt="" />
            </figure>
        <div className="">
          <p className="text-kalo">{review_text}</p>
          <h2 className="card-title">Card title!</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ClientReviewCard;