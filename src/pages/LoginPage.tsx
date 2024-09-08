import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white border border-gray-300 shadow-md">
                <img
                    className="mx-auto mb-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon Logo"
                    width={120}
                />
                <h2 className="text-2xl font-semibold mb-4">Sign-In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email or mobile phone number
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-600"
                    >
                        Continue
                    </button>
                </form>
                <p className="text-xs text-gray-600 mt-4">
                    By continuing, you agree to Amazon's <a href="#" className="text-blue-600">Conditions of Use</a> and <a href="#" className="text-blue-600">Privacy Notice</a>.
                </p>
                <div className="mt-6 flex items-center justify-between">
                    <hr className="w-full border-t border-gray-300" />
                    <span className="px-2 text-gray-600 text-sm">New to Amazon?</span>
                    <hr className="w-full border-t border-gray-300" />
                </div>
                <button
                    type="button"
                    className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                >
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
