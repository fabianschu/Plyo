import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
      MuiTypography: {
        variantMapping: {
          h1: 'h1',
          h2: 'h1',
          h3: 'h2',
          h4: 'h3',
          h5: 'h4',
          h6: 'h4',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  });

  export default theme;