import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputText:{
    width:'500px',
    backgroundColor:'#FFA47A',
    [theme.breakpoints.down('sm')]:{
      width:'250px'
    },
    borderRadius:'8px',
    border:'none'
  },
  title: {
    display:'none',
    marginLeft:'75px',
    fontWeight:'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight:'150px',
    },
  },
  search: {
    position: 'relative',
    marginLeft:theme.spacing(1),
    
    marginRight: theme.spacing(2),
    marginLeft: '15px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    backgroundColor:'#FFA47A',
    marginLeft:'95px',
    width:'400px',
    [theme.breakpoints.down('sm')]:{
      width:'250px'
    }
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginLeft:'75px',
    marginRight:'10px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));

export default function Navbar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



// some customs Styles

// changing the background color of the appbar
  const AppBarStyle={
    color:'black',
    backgroundColor:'#FF8761'
  }   

 // Giving box shadow to notificationIcons
  const NotificationIconStyle={
   boxShadow:'10px 10px 20px rgba(0, 0, 0, 0.25)',
  }


  return (
    
    <div className={classes.grow}>
   
      <AppBar position="static" style={AppBarStyle}>
        <Toolbar>

          <div>
            Icon
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            Ergo
          </Typography>

          
          <div className={classes.search}>
                 <div className={classes.searchIcon}>
                        <SearchIcon style={{color:'white'}}  />
                 </div>
               <InputBase
                      placeholder="Search…"
                      classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                        }}
                      inputProps={{ 'aria-label': 'search' }}
               />
          </div>
                     
              
                
          

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon style={NotificationIconStyle}/>
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
         
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */ }{/* For Options on clicking the profile*/}
    </div>

    
  );
}
