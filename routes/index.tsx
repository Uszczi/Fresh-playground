=============

WARNING: You are currently running a version of TypeScript which is not officially supported by typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.2.1 <3.6.0

YOUR TYPESCRIPT VERSION: 3.9.10

Please only submit bug reports when using the officially supported version.

=============
/** @jsx h */
import Counter from "../islands/Counter.tsx";
import { tw } from "@twind";
import { h } from "preact";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>update</p>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
