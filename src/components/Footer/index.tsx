
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-white mt-5 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
            <img src="/logo.png" className="w-auto h-[38px] object-contain"></img>
            <p className="text-base text-white">Rent a Car <br />Tüm hakları saklıdır &copy;</p>
        </div>
        <div className="footer__links">
            {footerLinks.map((Link)=> (
                <div className="footer__link" key={Link.title}>
                    <h3 className="font-bold">{Link.title}</h3>
                 
                </div>

            ))}
        </div>
      </div>
      <div className='flex justify-center items-center flex-wrap mt-10 border-t border-gray-100 sm:px-10 px-6 py-10'>
      <p>@2024 Rent a Car. Tüm hakları saklıdır</p>


    </div>
    </footer>
  );
};

export default Footer;
