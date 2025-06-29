"use client"
import React, { type FormEvent } from 'react'
import Input from '../ui/input'
import Button from '../ui/button';
import Send from '../icons/send';
import Mail from '../icons/mail';
import Link from 'next/link';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import Twitter from '../icons/twitter';

export default function ContactForm() {

    function formHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        // Collecting Form Data
        const form = event.currentTarget;
        const formData = new FormData(form);
        // Convert Form Data to simple object
        const data = Object.fromEntries(formData);
        console.log(data);
      }

  return (
    <form className="bg-black rounded-2xl px-6 py-10 text-white" onSubmit={formHandler}>
      <div className="space-y-5">
        <Input
          name="name"
          placeholder="Enter your name"
        />
        <Input
          name="email"
          placeholder="your email address"
        />
        <Input
          name="detail"
          placeholder="Describe your project"
        />
      </div>
      <div className="flex space-x-3 items-center mt-10">
        <Button
          label="Send"
          icon={<Send color="white" />}
          variant="split"
          buttonStyle="bg-transparent border-[white] border pr-5"
          iconStyle="border-[white] border"
        />
        <span className="opacity-60">Or</span>
        <Button
          label="Contact me"
          icon={<Mail color="white" />}
          variant="split"
          buttonStyle="bg-transparent border-[white] border"
          iconStyle="border-[white] border"
        />
      </div>
      <div className="flex items-center space-x-6 mt-8">
        <h5>@williamrey</h5>
        <ul className="flex items-center space-x-4">
          <li>
            <span className="w-8 h-[1px] bg-white block opacity-40" />
          </li>
          <li>
            <Link href="#">
              <Facebook color="white" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Instagram color="white" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Twitter color="white" />
            </Link>
          </li>
        </ul>
      </div>
    </form>
  );
}
