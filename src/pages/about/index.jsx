import MainHeader from "@/widgets/app-header/index.jsx";
import AboutImg from '@/shared/assets/img/about.png'

const About = () => {
    return (
        <div>
            <MainHeader/>
            <div className={'mt-32 flex justify-between items-center'}>
                <div className={'w-[500px]'}>
                    <div className={'font-inter text-[54px] font-semibold'}>Our Story</div>
                    <div className={'mt-8 text-base'}>
                        Launced in 2015, Lichi is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Lichi has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </div>
                    <div className={'mt-8 text-base'}>
                        Lichi has more than 1 Million products to offer, growing at a very fast. Lichi offers a diverse assotment in categories ranging  from consumer.
                    </div>
                </div>
                <div>
                    <img src={AboutImg} alt={'img'}/>
                </div>
            </div>
        </div>
    );
};

export default About;