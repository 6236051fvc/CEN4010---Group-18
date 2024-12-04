'use client'

import Link from "next/link";


import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/Components/ui/collapsible";
import Image from "next/image";
import Logo from "../../asset/img/Logo.png";
import bg1 from "../../asset/img/bg1.png";

import Layout from "../Components/Layout";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";



export default function Landing() {

  return (
    <Layout>
      <Toaster />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Image
            src={bg1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-t-3xl z-0"
          />
          <div className="relative z-10 container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                InstaFlash
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Craft custom flashcards on your favorite subjects and boost your knowledge.
                  Enjoy interactive learning whenever and wherever you want.
              </p>
              <div>
                <Link
                  href="/FlashCard"

                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Powered Flashcard Generation</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  InstaFlash&apos;s flashcard card generator leverages advanced natural language processing and machine learning algorithms to create engaging flashcards on any topic of your choice.

                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Personalized Topics</h3>
                      <p className="text-muted-foreground">
                        Create flashcards tailored to your interests and knowledge level.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Knowledge Level Support</h3>
                      <p className="text-muted-foreground">
                       Adjust the difficulty level for each topic, allowing the AI to generate flashcards tailored to your expertise.
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
              <div className="flex items-center justify-center">
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Get answers to common questions about InstaFlash.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  How do I create personalized flashcards?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  You can create personalized flashcards by inputting your preferred topics and difficulty level. Our AI
                  will generate a set of flashcards that match your choices, making learning more engaging and effective.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  Do I need an account to use InstaFlash?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                  Yes, you need to sign up to generate your flashcards and view them.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="rounded-md border bg-background shadow-sm">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  What artificial intelligence does InstaFlash use?
                  <ChevronRightIcon className="h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                InstaFlash utilizes Google's Gemini AI to generate flashcards on any topic you need to study.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
      </main>

    </Layout>
  );
}




function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

