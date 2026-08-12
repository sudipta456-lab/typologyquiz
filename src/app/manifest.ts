import type { MetadataRoute } from "next";

// Installable web app ("add to home screen").
//
// This is the retention lever for the driving tests: someone studying for a
// test in two weeks needs a reason to come back, and an icon on their home
// screen does that without an account, an email address, or a push
// subscription. Nothing is collected, and it costs no backend.

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TypologyQuiz - free quizzes & driving practice tests",
    short_name: "TypologyQuiz",
    description:
      "Free personality quizzes and driving licence practice tests. No account, no ads, scored on your device.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0795EA",
    orientation: "portrait",
    icons: [
      {
        src: "/assets/typologyquiz-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
