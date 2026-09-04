import type { ProjectRecord } from "./projects";

type ProjectVisualProps = {
  kind: ProjectRecord["key"];
};

export function ProjectVisual({ kind }: ProjectVisualProps) {
  if (kind === "ecommerce") {
    return (
      <svg
        className="project-plate project-plate-ecommerce"
        viewBox="0 0 480 300"
        aria-hidden="true"
        focusable="false"
        data-project-visual={kind}
      >
        <path
          className="plate-grid"
          d="M32 48h416M32 104h416M32 160h416M32 216h416M104 32v236M240 32v236M376 32v236"
        />
        <rect
          className="plate-surface"
          x="74"
          y="70"
          width="332"
          height="160"
          rx="3"
        />
        <path
          className="plate-line"
          d="M100 102h104M100 126h68M100 180h72M100 204h118"
        />
        <path
          className="plate-line plate-line-muted"
          d="M278 102h96M278 126h62M278 180h96M278 204h48"
        />
        <circle className="plate-signal" cx="240" cy="150" r="8" />
        <path className="plate-crosshair" d="M240 130v40M220 150h40" />
      </svg>
    );
  }

  if (kind === "productCatalog") {
    return (
      <svg
        className="project-plate project-plate-blog"
        viewBox="0 0 480 300"
        aria-hidden="true"
        focusable="false"
        data-project-visual={kind}
      >
        <path
          className="plate-grid"
          d="M40 44h400M40 256h400M82 28v244M398 28v244"
        />
        <rect
          className="plate-surface"
          x="96"
          y="58"
          width="288"
          height="184"
          rx="3"
        />
        <path
          className="plate-line plate-title-line"
          d="M122 92h178M122 110h126"
        />
        <path
          className="plate-line plate-line-muted"
          d="M122 146h106M122 162h92M122 178h102M258 146h100M258 162h86M258 178h96M122 210h236"
        />
        <rect
          className="plate-signal"
          x="334"
          y="88"
          width="24"
          height="24"
          rx="1"
        />
      </svg>
    );
  }

  return (
    <svg
      className="project-plate project-plate-tasks"
      viewBox="0 0 480 300"
      aria-hidden="true"
      focusable="false"
      data-project-visual={kind}
    >
      <path
        className="plate-grid"
        d="M32 46h416M32 254h416M62 28v244M418 28v244"
      />
      <path
        className="plate-line plate-lane"
        d="M92 78v144M240 78v144M388 78v144"
      />
      <rect
        className="plate-surface"
        x="106"
        y="94"
        width="106"
        height="42"
        rx="3"
      />
      <rect
        className="plate-surface"
        x="106"
        y="152"
        width="106"
        height="54"
        rx="3"
      />
      <rect
        className="plate-surface"
        x="254"
        y="112"
        width="106"
        height="58"
        rx="3"
      />
      <path
        className="plate-line plate-line-muted"
        d="M122 110h62M122 168h70M122 184h48M270 130h68M270 146h48"
      />
      <circle className="plate-signal" cx="360" cy="198" r="8" />
      <path className="plate-crosshair" d="M360 180v36M342 198h36" />
    </svg>
  );
}
