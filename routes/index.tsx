/** @jsx h */
import Modal from "../islands/Modal.tsx";
import Movies from "../islands/Movies.tsx";
import { tw } from "@twind";
import { h } from "preact";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Modal />
      <Movies />
    </div>
  );
}
