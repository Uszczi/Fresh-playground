/** @jsx h */
import { movies } from "../data/movies.ts";
import { tw } from "@twind";
import { Fzf, FzfResultItem } from "https://esm.sh/fzf@0.5.1";
import { h } from "preact";
import { useState } from "preact/hooks";

interface HighlightProps {
  str: string;
  indices: Set<number>;
}

type DisplayList = FzfResultItem<string>[];

const HighlightChars = (props: HighlightProps) => {
  const chars = props.str.split("");

  const nodes = chars.map((char, i) => {
    if (props.indices.has(i)) {
      return <b key={i}>{char}</b>;
    } else {
      return char;
    }
  });

  return <p>{nodes}</p>;
};

export default function Movies() {
  const fzf = new Fzf(movies, { limit: 22, casing: "case-insensitive" });
  const [Result, setResult] = useState<DisplayList>([]);
  const [showResult, setShowResult] = useState(false);

  const onChange = (text: InputEvent) => {
    if (text.target.value.length === 0) {
      setShowResult(false);
      return;
    }

    const entries = fzf.find(text.target.value);
    if (entries.length === 0) {
      setResult(entries);
      setShowResult(true);
    } else {
      setResult(entries);
      setShowResult(true);
    }
  };

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <div>
        <input
          onInput={onChange}
          placeholder="Start typing"
          class={tw`block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
        <div>
          {showResult
            ? Result.map((entry, i) => (
                <div key={i}>
                  <HighlightChars str={entry.item} indices={entry.positions} />
                </div>
              ))
            : movies.map((v, i) => (
                <div key={i}>
                  <p>{v}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
