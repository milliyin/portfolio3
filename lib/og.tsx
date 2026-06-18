import { ImageResponse } from "next/og";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OgCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function renderOgCard({ eyebrow, title, description }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #04131a 0%, #0b2530 45%, #123f4f 100%)",
          color: "#f6fdff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                background: "#6ee7f9",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "28px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9fe9f5",
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#d7f7fb",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 70 ? "58px" : "72px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#c8edf3",
              display: "flex",
              maxWidth: "920px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "24px",
            color: "#d7f7fb",
          }}
        >
          <div style={{ display: "flex" }}>{SITE_AUTHOR}</div>
          <div style={{ display: "flex" }}>{SITE_URL.replace("https://", "")}</div>
        </div>
      </div>
    ),
    ogSize
  );
}
