import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Body } from "~/components/Primitives/Body";
import { PreviewBox } from "../PreviewBox";
import { useTranslation } from "~/i18n";

export function PreviewVideoUri({
  src,
  contentType,
}: {
  src: string;
  contentType: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  useHotkeys(
    "space",
    (e) => {
      e.preventDefault();

      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    },
    [videoRef]
  );

  return (
    <div>
      <PreviewBox>
        <Body>
          <video key={src} controls ref={videoRef}>
            <source src={src} type={contentType} />
            {t("Sorry, your browser doesn't support embedded videos.")}
          </video>
        </Body>
      </PreviewBox>
    </div>
  );
}
