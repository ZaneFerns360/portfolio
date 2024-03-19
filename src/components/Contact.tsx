import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { Label } from "./label";
import { Input } from "./input";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact" className="mx-auto w-[80%]">
      <section className="w-full">
        <div className="mx-auto px-4 py-8">
          <h2 className="mb-1 text-3xl font-bold text-white md:text-4xl">
            Contact Me
          </h2>
          <p className="mb-3 text-start font-light text-gray-400 sm:text-lg lg:mb-5">
            Got any queries for me? Let me know.
          </p>

          <form className="space-y-3">
            <div className="gap-3 md:flex">
              <LabelInputContainer className="mb-3 md:mb-0">
                <Label htmlFor="email">Your email</Label>
                <Input
                  value={email}
                  className="bg-gray-800 text-white"
                  type="email"
                  id="email"
                  placeholder="name@xyz.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  value={subject}
                  type="text"
                  id="subject"
                  className="bg-gray-800 text-white"
                  placeholder="Let me know how I can help you"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                />
              </LabelInputContainer>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Your message</Label>
              <Input
                value={message}
                className="bg-gray-800 text-white"
                id="message"
                placeholder="Leave a comment..."
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></Input>
            </div>
            <button
              type="submit"
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-gray-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;
