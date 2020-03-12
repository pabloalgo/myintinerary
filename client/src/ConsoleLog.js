// to use console log as a component

const ConsoleLog = ({ children }) => {
	console.log(children);
	return false;
};

// EXAMPLE

// render() {
//     return (
//       <div>
//         <h1>List of countries</h1>
//         <ConsoleLog>{ this.props.countries }</ConsoleLog>
//       </div>
//     );
//   }
