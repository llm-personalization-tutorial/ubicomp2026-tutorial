(function () {
  document.querySelectorAll(".presenter-photo img").forEach((image) => {
    const markLoaded = () => {
      if (image.complete && image.naturalWidth > 0) {
        image.closest(".presenter-photo")?.classList.add("has-image");
      }
    };

    image.addEventListener("load", markLoaded);
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest(".presenter-photo")?.classList.add("is-missing");
    });
    markLoaded();
  });

  const architecture = document.querySelector(".architecture-shell");
  const connectorSvg = architecture?.querySelector(".architecture-connectors");
  const humanCore = architecture?.querySelector(".human-core");
  const tiers = ["device", "edge", "cloud"].map((name) => ({
    name,
    card: architecture?.querySelector(`.tier-${name}`),
    path: connectorSvg?.querySelector(`[data-connect="${name}"]`),
  }));

  if (architecture && connectorSvg && humanCore && tiers.every(({ card, path }) => card && path)) {
    let drawFrame = 0;

    const drawConnectors = () => {
      const shell = architecture.getBoundingClientRect();
      const core = humanCore.getBoundingClientRect();
      if (!shell.width || !shell.height) {
        return;
      }

      connectorSvg.setAttribute("viewBox", `0 0 ${shell.width} ${shell.height}`);

      const coreLeft = core.left - shell.left;
      const coreRight = core.right - shell.left;
      const coreTop = core.top - shell.top;
      const coreMiddle = core.top + core.height / 2 - shell.top;
      const coreCenter = core.left + core.width / 2 - shell.left;

      tiers.forEach(({ name, card, path }) => {
        const border = card.getBoundingClientRect();
        const startX = border.left + border.width / 2 - shell.left;
        const startY = border.bottom - shell.top;
        let route;

        if (name === "device") {
          const radius = Math.min(12, (coreLeft - startX) / 2, (coreMiddle - startY) / 2);
          route = `M ${startX} ${startY} L ${startX} ${coreMiddle - radius} Q ${startX} ${coreMiddle} ${startX + radius} ${coreMiddle} L ${coreLeft} ${coreMiddle}`;
        } else if (name === "edge") {
          route = `M ${startX} ${startY} L ${coreCenter} ${coreTop}`;
        } else {
          const radius = Math.min(12, (startX - coreRight) / 2, (coreMiddle - startY) / 2);
          route = `M ${startX} ${startY} L ${startX} ${coreMiddle - radius} Q ${startX} ${coreMiddle} ${startX - radius} ${coreMiddle} L ${coreRight} ${coreMiddle}`;
        }

        path.setAttribute("d", route);
      });
    };

    const queueDraw = () => {
      window.cancelAnimationFrame(drawFrame);
      drawFrame = window.requestAnimationFrame(drawConnectors);
    };

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(queueDraw);
      [architecture, humanCore, ...tiers.map(({ card }) => card)].forEach((element) => observer.observe(element));
    }
    window.addEventListener("resize", queueDraw);
    document.fonts?.ready.then(queueDraw);
    queueDraw();
  }

  const copyButton = document.querySelector("[data-copy-target]");
  const copyStatus = document.querySelector("[data-copy-status]");

  if (!copyButton) {
    return;
  }

  const setStatus = (message, isError) => {
    if (!copyStatus) {
      return;
    }

    copyStatus.textContent = message;
    copyStatus.classList.toggle("is-error", Boolean(isError));

    window.clearTimeout(setStatus.timeoutId);
    setStatus.timeoutId = window.setTimeout(() => {
      copyStatus.textContent = "";
      copyStatus.classList.remove("is-error");
    }, 2400);
  };

  const selectTargetText = (target) => {
    if (!target || !window.getSelection) {
      return false;
    }

    const range = document.createRange();
    range.selectNodeContents(target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  };

  const fallbackCopy = (text, target) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand("copy");
      if (success) {
        setStatus("BibTeX copied.");
      } else if (selectTargetText(target)) {
        setStatus("BibTeX selected. Press Cmd+C or Ctrl+C to copy.");
      } else {
        setStatus("Copy failed. Please copy manually.", true);
      }
    } catch (error) {
      if (selectTargetText(target)) {
        setStatus("BibTeX selected. Press Cmd+C or Ctrl+C to copy.");
      } else {
        setStatus("Copy failed. Please copy manually.", true);
      }
    } finally {
      document.body.removeChild(textarea);
    }
  };

  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : null;
    const text = target ? target.textContent.trim() : "";

    if (!text) {
      setStatus("Nothing to copy.", true);
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        setStatus("BibTeX copied.");
        return;
      } catch (error) {
        fallbackCopy(text, target);
        return;
      }
    }

    fallbackCopy(text, target);
  });
})();
