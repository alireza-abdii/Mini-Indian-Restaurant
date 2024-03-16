import contactBg from "../assets/delicious-indian-food-tray.png";

function Contact() {
  return (
    <div className="w-full h-[35rem] flex justify-between items-center">
      <div className="w-[50%] h-full">
        <img src={contactBg} alt="contact-page-bg" className="h-[35rem]" />
      </div>
      <form className="w-[50%] h-full flex flex-col px-8">
        <h1 className="w-full h-[20%] text-5xl py-14 mb-10">Contact Us</h1>
        <div className="w-full h-[60%] flex flex-col justify-center items-start space-y-10 mb-10">
          <div className="flex flex-col">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your fullname"
              className="w-96 mt-3 border-b-[1.5px] border-black focus:border-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-96 mt-3 border-b-[1.5px] border-black focus:border-none"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              className="w-96 mt-3 border-b-[1.5px] border-black focus:border-none"
            />
          </div>
        </div>
        <div className="w-full h-[20%]">
          <button className="flex justify-center items-center px-5 py-3 rounded-lg bg-slate-900 text-white transition-all ease-in-out duration-300 hover:bg-slate-600 ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
