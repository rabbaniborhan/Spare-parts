import './SubBanner.css'
import logo from '../../../assets/image/logo.png';

const SubBanner = ({heading, subHeading}) => {
    return (
        <section className="bg-banner bg-fixed md:bg-contain bg-cover">
            <div className='content'>
                <img className='h-12' src={logo} alt="" />
                <h3 className='text-5xl text-black font-semibold'>{heading}</h3>
                <h4 className='text-xxl text-black font-semibold'>{subHeading}</h4>
            </div>
        </section>
    );
};

export default SubBanner;