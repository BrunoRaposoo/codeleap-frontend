import SignUpForm from "@/src/components/SignUpForm";

export default function SignUp() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-lg flex flex-col bg-white rounded-2xl p-6">
        <h1 className="text-[1.375rem] font-bold text-black mb-4">
          Welcome to CodeLeap network!
        </h1>
        <SignUpForm label="Please enter your username" placeholder="John doe"/>
      </div>
    </div>
  )
}