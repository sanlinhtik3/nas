import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

async function createFeed(formData: FormData) {
  "use server";
  const rawData = {
    title: formData.get("title") as string,
    body: formData.get("body") as string,
  };
  const feed = await db.feed.create({
    data: {
      title: rawData.title,
      body: rawData.body,
    },
  });
  revalidatePath("/");
  return feed;
}

export default function Page() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feed
      </h1>

      <Card className="w-[350px]">
        <form action={createFeed}>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="name"
                  name="title"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Description</Label>
                <Input
                  id="name"
                  name="body"
                  placeholder="Name of your project"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
