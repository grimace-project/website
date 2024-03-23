import type { MetaFunction } from "@remix-run/node";
import Grimace from "grimace";
import { useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Grimace" },
    {
      name: "description",
      content: "Grimace shows you what emotions look like",
    },
  ];
};

export default function Index() {
  const containerRef = useRef(null);
  const grimaceRef = useRef(null);

  useEffect(() => {
    if (!grimaceRef.current) {
      const grimace = new Grimace(containerRef.current);
      grimaceRef.current = grimace;
    }
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="container" ref={containerRef}></div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
