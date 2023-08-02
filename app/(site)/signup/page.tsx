import Header from "@/components/Header";
import Signup from "@/components/SignUp";

export default function SignUpPage() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-32">
            <Header 
            heading="Register to create an account"
            paragraph="Already have an account"
            linkName="login"
            linkUrl="/login"/>

            <Signup />
        </div>
    )
}