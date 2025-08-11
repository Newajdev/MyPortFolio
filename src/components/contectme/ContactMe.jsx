



function ContactMe() {



    return (
        <>
            <div className="flex items-center flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-[60%] px-10">
                    <div className="lg:w-[70%] text-white">
                        <h3 className=" text-5xl font-bold  leading-16 mb-4">
                            Have a Project in Mind? <br /> <spen className="text-[#E1FF00]">Let’s talk!</spen>
                        </h3>
                        <p>I’m always open to exciting ideas, collaborations, and creative challenges. Share your vision, and let’s bring it to life</p>
                    </div>

                </div>
                <div className="lg:w-[40%] p-6 lg:p-0">
                    <div className="p-8 lg:p-14 border-2 border-[#194338] rounded-3xl bg-[#2151457f]">
                        <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Send inquiry</h3>
                        <p className="text-white ">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                    </div>
                    <form className="flex flex-col gap-3 mt-6">
                        <fieldset className="fieldset">
                            <input type="text" className="input w-full" placeholder="Your name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <input type="email" className="input w-full" placeholder="Email Address" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <input type="tel" className="input w-full" placeholder="WhatsApp" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <textarea rows={5} type="text" className="textarea h-24 w-full" placeholder="Your Message" />
                        </fieldset>
                        <input className="input bg-[#E1FF00] rounded-full mx-auto mt-6" type="submit" value="send your message" />
                    </form>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ContactMe;