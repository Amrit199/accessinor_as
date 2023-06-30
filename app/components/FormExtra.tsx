export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#389f8e] focus:ring-[#206e61] border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-[#389f8e] hover:text-[#206e61]">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}