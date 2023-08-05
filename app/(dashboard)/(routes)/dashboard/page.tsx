import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>User dashboard</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
