import { Chat } from "@/components/chat";
import { nanoid } from "nanoid";

export default function Page() {
  const id = nanoid();

  return (
    <Chat id={id} />
  );
}