import { ImFacebook2, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import avatar from "src/assets/images/avatar.png";

function Team() {
  return (
    <div className="container px-12 mt-32 bg-team bg-no-repeat bg-bottom bg-contain">
      {/* Heading */}
      <div className="flex flex-1">
        <div className="flex-grow">
          <div className="h-px bg-light-green my-6 w-full"></div>
        </div>
        <div className="flex-shrink px-14">
          <h1 className="text-light-green text-center font-extrabold text-4xl md:text-6xl font-cairo uppercase">
            Team
          </h1>
        </div>
        <div className="flex-grow">
          <div className="h-px bg-light-green my-6 w-full"></div>
        </div>
      </div>
      {/* Members */}
      <div className="flex flex-1 items-center flex-col md:flex-row justify-between mt-28">
        {/* Card 1 */}
        <div className="flex flex-col mb-20">
          <img
            src={avatar}
            width={200}
            alt=""
            height={200}
            objectFit="contain"
          />
          <h4 className="text-center mt-4 text-gray-400 font-light text-l font-cairo uppercase">
            Satoshi
          </h4>
          <h2 className="text-white text-center font-extrabold text-2xl font-cairo uppercase">
            Nakamoto
          </h2>
          <p className="text-light-green mt-2 text-center font-light text-l font-cairo uppercase">
            CEO
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col mb-20">
          <img
            src={avatar}
            width={200}
            alt=""
            height={200}
            objectFit="contain"
          />

          <h4 className="text-center mt-4 text-gray-400 font-light text-l font-cairo uppercase">
            Satoshi
          </h4>
          <h2 className="text-white text-center font-extrabold text-2xl font-cairo uppercase">
            Nakamoto
          </h2>
          <p className="text-light-green mt-2 text-center font-light text-l font-cairo uppercase">
            CEO
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col mb-20">
          <img
            src={avatar}
            width={200}
            alt=""
            height={200}
            objectFit="contain"
          />

          <h4 className="text-center mt-4 text-gray-400 font-light text-l font-cairo uppercase">
            Satoshi
          </h4>
          <h2 className="text-white text-center font-extrabold text-2xl font-cairo uppercase">
            Nakamoto
          </h2>
          <p className="text-light-green mt-2 text-center font-light text-l font-cairo uppercase">
            CEO
          </p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col mb-20">
          <img
            src={avatar}
            width={200}
            alt=""
            height={200}
            objectFit="contain"
          />

          <h4 className="text-center mt-4 text-gray-400 font-light text-l font-cairo uppercase">
            Satoshi
          </h4>
          <h2 className="text-white text-center font-extrabold text-2xl font-cairo uppercase">
            Nakamoto
          </h2>
          <p className="text-light-green mt-2 text-center font-light text-l font-cairo uppercase">
            CEO
          </p>
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex items-center justify-around pt-24 pb-44">
        <div className="flex gap-8">
          <ImFacebook2 color="white" />
          <ImTwitter color="white" />
          <FaInstagram color="white" />
        </div>
      </div>
    </div>
  );
}

export default Team;
