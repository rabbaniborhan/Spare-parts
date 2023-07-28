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
                <div className="my-16 mx-24 px-16">
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
                        <input className="border-2 rounded-xl w-1/2 py-2 text-center" type="submit" value="Login" />
                    </form>
                </div>

                {/* registration section */}
                <div className="my-16 mx-24 px-16">
                    <h2 className="text-4xl py-9">Registration</h2>
                    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p>Email address</p>
                            <input className="border-2 w-full p-2 rounded-md my-2" {...register("email", {required: true, maxLength: 20})} />
                        </div>
                        <div>
                            <p>A link to set a new password will be sent to your email address.</p>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        </div>
                        <input className="border-2 rounded-xl w-1/2 py-2 text-center" type="submit" value="Registration" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;