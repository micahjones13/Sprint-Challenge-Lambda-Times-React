import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      // let isSame = false;
      // if (props.tab.tab === props.selectedTab){
      //   isSame = true;
      // }
      // else{
      //   isSame = false;
      // }
      // console.log(isSame);
  return (
    <div

      className = {(props.tab === props.selectedTab) ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
}

export default Tab;






//inside return 
// <div
// className={`tab ${isSame ? ' active-tab' : '' }`}
// onClick={() => props.selectTabHandler(props.tab)}
// >
// {props.tab.toUpperCase()}
// </div>