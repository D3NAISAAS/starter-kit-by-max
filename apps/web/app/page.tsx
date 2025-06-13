import { trpc } from "@/trpc/server";
import { Button } from "@workspace/ui/components/button";

export default async function Page() {
  const greeting = await trpc.hello();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <pre className="max-h-[50vh] overflow-y-scroll text-xs whitespace-pre-wrap bg-black/10 p-4 rounded">{JSON.stringify(greeting, null, 2)}</pre>
        {greeting.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <p className="text-lg font-semibold">{user.firstName} {user.lastName}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
