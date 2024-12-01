/* eslint-disable react/prop-types */

const ClientReviewCard = ({ client }) => {

    const { name, image, review_text, designation } = client;

    return (
        <div className="relative  flex flex-col bg-base-100  pt-10  px-4 pb-8 border-2">
            <figure className="w-12 h-12 absolute  -top-7 left-3">
                <img className="w-full h-full object-cover rounded-full" src={image} alt="" />
            </figure>
            <p className="text-kalo">{review_text.slice(0,90)}</p>
            <h2 className="card-title">{name}</h2>
            <p>{designation}</p>
        </div>
    );
};

export default ClientReviewCard;