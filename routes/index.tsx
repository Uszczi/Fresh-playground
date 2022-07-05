/** @jsx h */
import { movies } from "../data/movies.ts";
import Counter from "../islands/Counter.tsx";
import { tw } from "@twind";
import { Fzf, FzfResultItem } from "https://esm.sh/fzf@0.5.1";
import { h } from "preact";
import { useState } from "preact/hooks";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Counter />
    </div>
  );
}
