// 1. Please tell what margin is, how it differs from padding, why padding cannot be used instead of margin.

// 2. Explain with clear examples: objects, classes, prototyping, getters, setters.

// 3. The student turns to you with a question:
// "Please explain this code:

//  const filter = (arr, fn) => {
// return arr.reduce((filteredArr, element) => {
//  return fn(element) ? [...filteredArr] : [...filteredArr, element]
//  }, [])
// }

// console.log(filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0)) // [1, 3, 5]

// Can't understand function nesting (unintelligible syntax)!"

// 4. Please fix everything that is wrong here, you can rewrite it to a functional component.

// import React from 'react';

// // What's wrong here?
// // If something is wrong, how can it be fixed?

// class ListRenderer extends React.Component {
//   state = {
//     event: null
//   };

//   componentDidUpdate (prevProps, prevState, snapshot) {
//     window.addEventListener('message', (e) => this.setState({ event: e }))
//   }

//   render () {
//     return this.state.event;
//   }
// }
