/* eslint-disable react/prop-types */


const FaqsCard = ({ faqs }) => {
    const {question, description} = faqs
    return (
        <div>
            <div tabIndex={0} className="collapse mb-4 collapse-plus border-base-300 border bg-white shadow ">
                <div className="collapse-title text-xl font-medium text-bla">{question}</div>
                <div className="collapse-content">
                    <p className="text-kalo">{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default FaqsCard;