import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  return (
    <div className="browser-mockup">
      <div className="browser-topbar">
        <span className="browser-dot" style={{ background: "#ff5f57" }} />
        <span className="browser-dot" style={{ background: "#febc2e" }} />
        <span className="browser-dot" style={{ background: "#28c840" }} />
        {url && <span className="browser-url-bar">{url}</span>}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        quality={95}
        priority
      />
    </div>
  );
}
