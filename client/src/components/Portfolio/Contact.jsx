import { useSelector } from "react-redux";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { contact } = portfolioData;
  const { name, email, phone, address } = contact;

  return (
    <>
      <SectionTitle title={`Say Hello!!`} />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>

          <p className="ml-5">
            <span className="text-tertiary"> name : </span>
            <span className="text-tertiary"> &nbsp; {name}</span>
          </p>
          <p className="ml-5">
            <span className="text-tertiary"> email : </span>
            <span className="text-tertiary"> &nbsp; {email}</span>
          </p>
          <p className="ml-5">
            <span className="text-tertiary"> phone : </span>
            <span className="text-tertiary"> &nbsp; {phone}</span>
          </p>
          <p className="ml-5">
            <span className="text-tertiary"> address : </span>
            <span className="text-tertiary"> &nbsp; {address}</span>
          </p>
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/6e206c73-1924-41d7-951e-0da2900a19b9/Eno2CgocTw.json"
            background="transparent"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Contact;
