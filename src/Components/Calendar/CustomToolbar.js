import { Toolbar } from '@devexpress/dx-react-scheduler-material-ui';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

const PREFIX = 'Demo';

const classes = {
  toolbarRoot: `${PREFIX}-toolbarRoot`,
  progress: `${PREFIX}-progress`,
};

const StyledDiv = styled('div')({
  [`&.${classes.toolbarRoot}`]: {
    position: 'relative',
  },
});

const StyledLinearProgress = styled(LinearProgress)(() => ({
  [`&.${classes.progress}`]: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
}));

const ToolbarWithLoading = (
  ({ children, ...restProps }) => (
    <StyledDiv className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>
        {children}
      </Toolbar.Root>
      <StyledLinearProgress className={classes.progress} />
    </StyledDiv>
  )
);

function CustomToolbar(props) {
  const loading = useSelector(state => state.calendar.loading);

  return <Toolbar {...loading ? { rootComponent: ToolbarWithLoading } : null} />;
}

export default CustomToolbar;