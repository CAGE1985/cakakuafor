import { NextResponse } from "next/server";

export const revalidate = 300; // 5 dakika

type InstagramItem = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json(
      { error: "INSTAGRAM_ACCESS_TOKEN is missing" },
      { status: 500 }
    );
  }

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set(
    "fields",
    "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp"
  );
  url.searchParams.set("limit", "10");
  url.searchParams.set("access_token", accessToken);

  try {
    const res = await fetch(url.toString(), {
      // Revalidate handled by route export, but also ensure CDN cache friendliness
      next: { revalidate },
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }
    const data = (await res.json()) as { data: InstagramItem[] };
    const items = Array.isArray(data.data) ? data.data : [];
    return NextResponse.json({ items });
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

