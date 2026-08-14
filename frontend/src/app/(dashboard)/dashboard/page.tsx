import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'
import { adminDb } from '@/lib/firebase/admin'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const session = await getServerSession()
  const profileSnap = session ? await adminDb.collection('users').doc(session.uid).get() : null

  const displayName = profileSnap?.exists
    ? (profileSnap.data()?.displayName as string | null)
    : null
  const greetingName = displayName ?? session?.email ?? null

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold text-blue-600">Team 1</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Responsible Content-Safety Infrastructure
          </h1>
          <p className="mt-1 text-sm text-zinc-400">IBM X RMIT Capstone Project</p>
          {greetingName && (
            <p className="mt-1 text-sm text-zinc-500">Welcome back, {greetingName}.</p>
          )}
        </div>
        <div>
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black">Our Team</h3>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Minh Dat Nguyen',
                role: 'Project Manager',
                description:
                  'Responsible for project coordination, timeline management, and stakeholder communication.',
                photo: '/Team_Photos/image_PM.jpg',
              },
              {
                name: 'Shriharish Muthumalai Arunkumar',
                role: 'Business Analyst',
                description:
                  'Focused on requirements analysis, documentation, and ensuring project goals align with business needs.',
                photo: '/Team_Photos/image_BA.jpg',
              },
              {
                name: 'Metric Harneet Kaur',
                role: 'UX Designer',
                description:
                  'Leading the interface design, user research, and ensuring a seamless, accessible user experience.',
                photo: '/Team_Photos/image_UX_missing.jpg',
              },
              {
                name: 'Alexandre Lee',
                role: 'Developer 1',
                description:
                  'Primary developer responsible for the implementation of core features and system architecture. This is a long-blurb edge case example to demonstrate how the card expands vertically and allows text to wrap naturally without breaking the layout or truncating information.',
                photo: '/Team_Photos/image_Dev1.jpg',
              },
              {
                name: 'Kai Lek Kum',
                role: 'Developer 2',
                description:
                  'Supporting the development process with a focus on testing, deployment, and backend integration.',
                photo: '/Team_Photos/image_Dev2.jpg',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />

                <h2 className="mt-4 text-lg font-bold text-black">{member.name}</h2>

                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-900">
                  {member.role}
                </span>

                <p className="mt-3 text-sm text-zinc-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-[#F3EBDD] px-6 py-6 text-center text-sm text-zinc-600">
        © 2026 IBM × RMIT Capstone Project. All rights reserved.
      </footer>
    </div>
  )
}
