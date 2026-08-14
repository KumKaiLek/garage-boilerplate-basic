import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Responsible Content-Safety Infrastructure — IBM x RMIT Capstone Project',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white p-8 text-center">
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-bold text-blue-600">Team 1</p>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Responsible Content-Safety Infrastructure
        </h1>
        <p className="text-sm text-zinc-500">IBM X RMIT Capstone Project</p>
        <p className="text-lg text-zinc-600">
          Building safer content-review experiences through responsible AI.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
        >
          Sign in
        </Link>
        <Link
          href="/auth/signup"
          className="inline-flex items-center justify-center rounded-md border border-black bg-white px-6 py-2.5 text-sm font-bold text-black shadow-sm transition-colors hover:bg-zinc-50"
        >
          Create account
        </Link>
      </div>
    </main>
  )
}
