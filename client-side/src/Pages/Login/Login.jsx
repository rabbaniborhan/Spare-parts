import SubBanner from "../../Components/Shared/SubBanner/SubBanner";
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <SubBanner heading='My Account' subHeading="Home > My Account" />
            {/* login page */}
            <div className="grid md:grid-cols-2 grid-cols-1">
                {/* login section */}
                <div className="my-16 md:mx-24 mx-12 md:px-16">
                    <h2 className="text-4xl py-9">Login</h2>
                    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p>Username or email address</p>
                            <input className="border-2 w-full p-2 rounded-md my-2" {...register("email", {required: true, maxLength: 20})} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input className="border-2 w-full p-2 rounded-md my-2"  {...register("password", {pattern: /^[A-Za-z]+$/i})} />
                        </div>
                        <label form="remember" className="flex items-center">
                            <input type="checkbox" className="me-2 w-4 h-4" name="remember" id="remember" />
                            remember me
                        </label>
                        {/* <input className="border-2 rounded-xl w-1/2 py-2 text-center" type="submit" value="Login" /> */}
                        <button type="submit" className="w-2/5 relative inline-flex items-center justify-start py-3 pl-4 pr-10 overflow-hidden font-semibold text-gray-600 transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-500 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Login</span>
                        </button>
                    </form>
                </div>

                {/* registration section */}
                <div className="my-16 md:mx-24 mx-12 md:px-16">
                    <h2 className="text-4xl py-9">Registration</h2>
                    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p>Email address</p>
                            <input className="border-2 w-full p-2 rounded-md my-2" {...register("email", {required: true, maxLength: 20})} />
                        </div>
                        <div>
                            <p>A link to set a new password will be sent to your email address.</p>
                            <p className="mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span></p>
                        </div>
                        {/* <input className="border-2 rounded-xl w-1/2 py-2 text-center" type="submit" value="Registration" /> */}

                        <button type="submit" className="w-2/5 relative inline-flex items-center justify-start py-3 pl-4 pr-10 overflow-hidden font-semibold text-gray-600 transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-500 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Registration</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;