import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Link from "next/link";

export function Resizable({ children }: { children: any }) {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={20}>
        <div className="h-[90vh]">
          <NavList>
            <Link href="/portal">Home</Link>
          </NavList>
          <NavList>Content</NavList>
          <NavList>Course</NavList>
          <NavList>
            <Link href="/portal/feed">Feed</Link>
          </NavList>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75}>
            <div className="">{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

function NavList({ children }: { children: any }) {
  return <div className="p-3 hover:bg-sky-100">{children}</div>;
}
