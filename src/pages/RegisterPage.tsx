import React, { useState } from "react";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-semibold mb-4">Create Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-200"
                    >
                        Continue
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-4">
                    By creating an account, you agree to Amazon's{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Conditions of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Privacy Notice
                    </a>.
                </p>
                <hr className="my-6" />
                <div className="flex justify-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Sign-In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;