import MainHeader from "@/widgets/app-header/index.jsx";
import mail from '@/shared/assets/icons/mail.svg'
import phone from '@/shared/assets/icons/phone.svg'
import Input from "@/shared/ui/input/index.jsx";
import Button from "@/shared/ui/button/index.jsx";

const Contacts = () => {
    return (
        <div>
            <MainHeader/>
            <div className={'mt-52 flex justify-between items-center'}>
                <div className={'w-[340px] h-[457px] flex flex-col gap-y-5 bg-[#'}>
                    <div className={'flex flex-col gap-y-3'}>
                        <div className={'flex gap-2 items-center'}>
                            <img src={phone} alt=""/>
                            <div className={'font-poppins text-base'}>Call To Us</div>
                        </div>
                        <div className={'font-poppins text-sm flex flex-col gap-y-3'}>
                            <div>We are available 24/7, 7 days a week.</div>
                            <div>Phone: +8801611112222</div>
                        </div>
                    </div>
                    <hr/>
                    <div className={'flex flex-col gap-y-3'}>
                        <div className={'flex gap-2 items-center'}>
                            <img src={mail} alt=""/>
                            <div className={'font-poppins text-base'}>Write To US</div>
                        </div>
                        <div className={'font-poppins text-sm flex flex-col gap-y-3'}>
                            <div>Fill out our form and we will contact you within 24 hours.</div>
                            <div>Emails: customer@lichi.com</div>
                            <div>Emails: support@lichi.com</div>
                        </div>
                    </div>
                </div>
                <form action="">
                    <div className={'w-[800px] p-4 flex flex-col gap-y-5'}>
                        <div className={'flex gap-5 w-[737px]'}>
                            <Input placeholder={'Your Name'} type={'text'}/>
                            <Input placeholder={'Your Email'} type={'text'}/>
                            <Input placeholder={'Your Phone'} type={'phone'}/>
                        </div>
                        <textarea
                            className={'w-[737px] h-[207px] bg-[#F5F5F5] rounded p-5'}
                            placeholder="Your Message..."
                        />
                        <div className={'flex justify-end'}>
                            <Button type={'secondary'} size={'lg'}>Send Message</Button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contacts;