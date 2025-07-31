import { useCallback } from "react";
import { TapeSvg } from "../components/tape-svg";
import { ThemeSwitcherExpanded } from "../components/theme-switcher";
import { GithubLogoIcon } from "../icons";
import { Button } from "../components/button";

export const Header = () => {
  const scrollToTop = useCallback(() => {
    window.history.replaceState({}, "", window.location.pathname);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex h-[100px] items-center justify-between border-custom border-b bg-site/60 p-6 backdrop-blur-md md:border-x">
      <div className="cursor-pointer" onClick={scrollToTop}>
        <TapeSvg className="h-5 text-primary" />
        <span className="text-muted text-sm">brand & design system</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/sasicodes/winder.tape.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="icon"
            variant="secondary"
            className="backdrop-blur-3xl rounded-full"
            title="View on Github"
          >
            <GithubLogoIcon className="h-4 w-4" />
          </Button>
        </a>
        <ThemeSwitcherExpanded id="winder-header" />
      </div>
    </nav>
  );
};
