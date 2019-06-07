## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

   - PropTypes are used to make sure that the type of prop being passed is the one that is actually expected. It's important to check this so that further on we aren't working with props of a type that isn't supposed to be there.

- [x] Describe a life-cycle event in React?
    
    - A lifecycle event is an event like the compenentDidMount(), componentDidUpdate(), and others where it runs everytime during an apps lifecylce that data is changed and render is called again.

- [x] Explain the details of a Higher Order Component?

    A HOC takes in an exisiting component as an argurment, and modifies it, then returns it. It can take in more than one component as an argument, and curry them so that it can effect more than one component. 

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

    Basic CSS files: The advantage of this would be for me personally, I'm most comfortable with it. 

    Styled-Components: Advantage is that the CSS is inside the JS on the file, so it's easy to find and implement as components in the render section.

    Reactstrap: A libray with tons of pre-made styled components, the advantage to this would be that they are already made, and you simply have to choose which values to give each property when calling it. However, you (or at least I) have to look up the properties of each component in order to know what to pass it to change it, since I'm not that familiar with the libray yet.