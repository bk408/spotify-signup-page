import spotifyLogo from "../assets/logo.png";

const AuthValidation = () => {
  return (
    <div className="form-container">
      <div className="box">
        <div className="logo">
          <img src={spotifyLogo} alt={spotifyLogo} />
        </div>
        <form>
          <div className="form-details">
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="form-details">
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="form-details">
            <input type="text" placeholder="Enter your Password" />
          </div>
          <div className="form-details">
            <button>Sign up</button>
          </div>
          <div className="new-user">
            <span>Already Registered?</span> <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthValidation;
