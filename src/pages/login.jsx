function Login() {
  return (
    <div>
      <div class="Sign-Up-Form">
        <h1>Sign Up Now</h1>
        <form>
          <input type="User Name" class="input-box" placeholder="User Name" />
          <br />
          <br />
          <input type="Email" class="input-box" placeholder="Your Email" />
          <br />
          <br />
          <input type="Password" class="input-box" placeholder="Password" />
          <br />
          <br />
          <input
            type="Password"
            class="Re-Password"
            placeholder="Re-Password"
          />
          <br />
          <br />
          <button>Sign</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
