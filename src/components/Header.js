import headerLogo from "./../assets/netflix-header-logo.png";

const Header = () => {
  return (
    <div className="absolute top-0 px-40 bg-gradient-to-b from-black cursor-pointer">
      <img className=" w-44" src={headerLogo} alt="" />
    </div>
  );
};

export default Header;
