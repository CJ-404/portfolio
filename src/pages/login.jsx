const Login = () => {

  console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
  console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
  console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Login</h1>
      </div>
    </section>
  );
};

export default Login;
