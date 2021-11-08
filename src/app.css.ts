import { style } from "@vanilla-extract/css";

export const className = style({
  display: 'flex',
  flexDirection: 'column',
  selectors: {
    '&:nth-child(2n)': {
      background: 'aliceblue'
    }
  },
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row'
    }
  }
});



/* export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "white",
  padding: 10
}); */
