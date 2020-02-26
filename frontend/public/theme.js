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
    trafficLights: {
      green1: '#13EBA2',
      green2: '#11D392',
      green3: '#0fbc83',
      green4: '#0DA471',
      red: '#eb153c',
      yellow: '#eba213',
    }
  });

  export default theme;