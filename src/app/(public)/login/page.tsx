"use client";

import Image from "next/image";
import {
  Montserrat,
  Playfair_Display,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-950">
      <div
        className={`
          ${montserrat.className}
          w-full max-w-md
          rounded-lg
          p-8
          shadow-lg
        `}
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-white">
          Welcome to{" "}
          <span className={playfairDisplay.className}>
            Nuvio
          </span>
          !
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-gray-400">
          Login to your account! ☁️
        </p>

        {/* Form */}
        <form className="mt-6">
          {/* Email */}
          <input
            required
            type="email"
            placeholder="Email"
            className="
              mt-4
              w-full
              rounded-md
              bg-gray-800
              p-2
              text-white
              outline-none

              focus:ring-1
              focus:ring-blue-500
            "
          />

          {/* Password */}
          <input
            required
            type="password"
            placeholder="Password"
            className="
              mt-4
              w-full
              rounded-md
              bg-gray-800
              p-2
              text-white
              outline-none

              focus:ring-1
              focus:ring-blue-500
            "
          />

          {/* Terms */}
          <div className="mt-4 flex items-center">
            <input
              required
              type="checkbox"
              id="terms"
            />

            <label
              htmlFor="terms"
              className="ml-2 text-xs text-gray-400"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              mt-4
              w-full
              rounded-md
              bg-white
              p-2
              text-black

              transition-colors
              duration-300

              hover:bg-gray-200

              cursor-pointer
            "
          >
            Login
          </button>

          {/* Divider */}
          <p
            className="
              flex
              items-center
              justify-center
              gap-2
              p-2
              text-white
            "
          >
            Or
          </p>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Google */}
            <button
              className="
                group

                flex items-center
                overflow-hidden

                h-14
                w-14
                hover:w-56

                px-4

                text-white
                bg-transparent

                border border-white
                rounded-md

                transition-all
                duration-300
                ease-in-out

                hover:bg-white
                hover:text-black

                cursor-pointer
              "
            >
              <Image
                src="/google-icon.png"
                alt="Google"
                width={20}
                height={20}
                className="
                  min-w-[20px]

                  brightness-0
                  invert

                  transition-all
                  duration-300

                  group-hover:brightness-100
                  group-hover:invert-0
                "
              />

              <span
                className="
                  ml-3
                  whitespace-nowrap

                  opacity-0
                  -translate-x-3

                  transition-all
                  duration-300

                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              >
                Entrar com Google
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}