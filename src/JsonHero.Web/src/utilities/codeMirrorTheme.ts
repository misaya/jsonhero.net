import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";

export function darkTheme(): Extension {
  const chalky = "#e5c07b",
    coral = "#e06c75",
    cyan = "#56b6c2",
    invalid = "#ffffff",
    ivory = "#abb2bf",
    stone = "#7d8799",
    malibu = "#61afef",
    sage = "#98c379",
    whiskey = "#d19a66",
    violet = "#c678dd",
    darkBackground = "#21252b",
    highlightBackground = "rgba(234,179,8,0.3)",
    background = "rgb(15,23,42)",
    tooltipBackground = "#353a42",
    selection = "#3E4451",
    cursor = "#528bff";

  const jsonHeroEditorTheme = EditorView.theme(
    {
      "&": {
        color: ivory,
        backgroundColor: background,
      },

      ".cm-content": {
        caretColor: cursor,
        fontFamily: "MonoLisa, monospace",
        fontSize: "14px",
      },

      ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
      "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
        { backgroundColor: selection },

      ".cm-panels": { backgroundColor: darkBackground, color: ivory },
      ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
      ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

      ".cm-searchMatch": {
        backgroundColor: "#72a1ff59",
        outline: "1px solid #457dff",
      },
      ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "#6199ff2f",
      },

      ".cm-activeLine": { backgroundColor: highlightBackground },
      ".cm-selectionMatch": { backgroundColor: "#aafe661a" },

      "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bad0f847",
        outline: "1px solid #515a6b",
      },

      ".cm-gutters": {
        backgroundColor: background,
        color: stone,
        border: "none",
      },

      ".cm-activeLineGutter": {
        backgroundColor: highlightBackground,
      },

      ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "#ddd",
      },

      ".cm-tooltip": {
        border: "none",
        backgroundColor: tooltipBackground,
      },
      ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      },
      ".cm-tooltip .cm-tooltip-arrow:after": {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground,
      },
      ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": {
          backgroundColor: highlightBackground,
          color: ivory,
        },
      },
    },
    { dark: true }
  );

  return [jsonHeroEditorTheme];
}

export function lightTheme(): Extension {
  const chalky = "#e5c07b",
    coral = "#e06c75",
    cyan = "#56b6c2",
    invalid = "#ffffff",
    ivory = "#abb2bf",
    stone = "#7d8799",
    malibu = "#61afef",
    sage = "#98c379",
    whiskey = "#d19a66",
    violet = "#c678dd",
    darkBackground = "#21252b",
    highlightBackground = "#D0D0D0",
    background = "rgb(248,250,252)",
    tooltipBackground = "#353a42",
    selection = "#D0D0D0",
    cursor = "#528bff";

  const jsonHeroEditorTheme = EditorView.theme(
    {
      "&": {
        color: ivory,
        backgroundColor: background,
      },

      ".cm-content": {
        caretColor: cursor,
        fontFamily: "MonoLisa, monospace",
        fontSize: "14px",
      },

      ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
      "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
        { backgroundColor: selection },

      ".cm-panels": { backgroundColor: darkBackground, color: ivory },
      ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
      ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

      ".cm-searchMatch": {
        backgroundColor: "#72a1ff59",
        outline: "1px solid #457dff",
      },
      ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "#6199ff2f",
      },

      ".cm-activeLine": { backgroundColor: highlightBackground },
      ".cm-selectionMatch": { backgroundColor: "#aafe661a" },

      "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bad0f847",
        outline: "1px solid #515a6b",
      },

      ".cm-gutters": {
        backgroundColor: background,
        color: stone,
        border: "none",
      },

      ".cm-activeLineGutter": {
        backgroundColor: highlightBackground,
      },

      ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "#ddd",
      },

      ".cm-tooltip": {
        border: "none",
        backgroundColor: tooltipBackground,
      },
      ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      },
      ".cm-tooltip .cm-tooltip-arrow:after": {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground,
      },
      ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": {
          backgroundColor: highlightBackground,
          color: ivory,
        },
      },
    },
    { dark: false }
  );

  return [jsonHeroEditorTheme];
}
