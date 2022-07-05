/** @jsx h */
import { movies } from "../data/movies.ts";
import Counter from "../islands/Counter.tsx";
import { tw } from "@twind";
import { h } from "preact";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <ul>
        {movies.map((i) => <li>{i}</li>)}
      </ul>
      <p>update</p>
    </div>
  );
}
