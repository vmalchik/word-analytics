import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  // derived state
  const characters = text?.length || 0;
  const words = text?.split(" ").filter((word) => word !== "").length || 0;
  const instagram = INSTAGRAM_MAX_CHARACTERS - characters;
  const facebook = FACEBOOK_MAX_CHARACTERS - characters;
  const stats = { characters, words, instagram, facebook };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
