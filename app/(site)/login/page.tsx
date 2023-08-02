import Header from "@/components/Header";
import Login from "@/components/Login";

export default function LoginPage() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-32">
            <Header 
            heading="Login to your account"
            paragraph="Don't have an account yet?"
            linkName="Register Now"
            linkUrl="/signup"/>
            <Login />
        </div>
    )
}