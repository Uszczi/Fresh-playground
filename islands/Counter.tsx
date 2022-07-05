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
type DisplayList = FzfResultItem<string>[] | string[];

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

export default function Counter() {
  const fzf = new Fzf(movies, { limit: 22, casing: "case-insensitive" });
  const [display_list, setList] = useState<DisplayList>(movies);
  const [st, setSt] = useState(false);

  const onChange = (text) => {
    console.log("adsfasdf");
    const entries = fzf.find(text.target.value);
    if (entries.length === 0) {
      setList(entries);
      setSt(false);
    } else {
      setList(entries);
      setSt(true);
    }
  };

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <div>
        <input onInput={onChange} />
        <div>
          {typeof display_list[0] !== "string"
            ? display_list.map((entry, i) => (
              <div key={i}>
                <HighlightChars str={entry.item} indices={entry.positions} />
              </div>
            ))
            : display_list.map((v, i) => (
              <div key={i}>
                <p>{v}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
