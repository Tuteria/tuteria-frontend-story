/** @jsxImportSource @emotion/react */
import { CSSReset } from "@chakra-ui/react";
import * as React from "react";
import { css, Global } from "@emotion/react";
// 1. import `ChakraProvider` component
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

export const GlobalFonts = css`
  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit-Medium.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit-Medium.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit-Medium.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit-Bold.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit-Bold.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit-Bold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Regular.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Medium.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-SemiBold.woff") format("woff"),
      url("/static/fonts/Inter/Inter-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Bold.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;

export const GlobalStyle = css`
  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit-Medium.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit-Medium.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit-Medium.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit-Bold.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit-Bold.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit-Bold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Larsseit;
    src: url("/static/fonts/Larsseit/Larsseit.woff") format("woff"),
      url("/static/fonts/Larsseit/Larsseit.eot") format("eot"),
      url("/static/fonts/Larsseit/Larsseit.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Regular.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Medium.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-SemiBold.woff") format("woff"),
      url("/static/fonts/Inter/Inter-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/static/fonts/Inter/Inter-Bold.woff") format("woff"),
      url("/static/fonts/Inter/Inter-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: normal;
    font-family: inherit;

    &:focus {
      outline: 0;
    }
  }

  input[type="number"] {
    ::-webkit-inner-spin-button {
      display: none;
    }
  }

  input:focus,
  select:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html,
  body {
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.gray["500"]};
    line-height: ${theme.lineHeights.normal};
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  .pac-container {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
    border-radius: ${theme.borderRadius.regular};
  }

  .pac-container .pac-item .pac-icon {
    background-image: none;
    display: none;
  }

  .pac-container .pac-item {
    color: ${theme.colors.gray["500"]} !important;
    padding: 8px 16px;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.normal};
    border: none;

    &:hover {
      background-color: ${theme.colors.gray["200"]};
      cursor: pointer;
    }

    &.pac-item-selected {
      background-color: ${theme.colors.gray["200"]};
    }

    .pac-item-query {
      font-size: ${theme.fontWeights.normal};
      padding-right: 3px;
      color: ${theme.colors.gray["500"]};
    }

    .pac-matched {
      font-weight: ${theme.fontWeights.medium};
    }
  }

  .pac-logo {
    &:after {
      display: none;
    }
  }
`;
export const ThemeProvider: React.FC = ({ children }) => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalFonts} />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
