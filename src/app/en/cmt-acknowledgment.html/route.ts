import { cmtAcknowledgmentText } from "@/content/cmt";

export const dynamic = "force-static";

export function GET() {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CMT Acknowledgment | ICLSET 2026</title>
</head>
<body>
<main>
<h1>CMT Acknowledgment</h1>
<p>${cmtAcknowledgmentText}</p>
</main>
</body>
</html>
`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
