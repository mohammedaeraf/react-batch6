// Props
type GreetingProps = {
  name: string;
  greeting: string;
};

// type Product = {
//     title: string;
//     price: number;
// }

function Greeting(props: GreetingProps) {
  return <h2 className="text-info">{props.greeting} {props.name}</h2>;
}

export default Greeting;
