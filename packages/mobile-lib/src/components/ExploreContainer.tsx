// import './ExploreContainer.css';
import {Box, Heading, Text} from '@chakra-ui/react'
interface ContainerProps {
  name: string;
}

const ChakraStyling:React.FC<{name:string}> = ({name})=>{
  return <Box>
    <Heading>{name}</Heading>
    <Text fontSize={16} lineHeight={22} color="gray" >
    <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
    </Text>
  </Box>
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return <ChakraStyling name={name}/>
  // return (
  //   <div className="container">
  //     <strong>{name}</strong>
  //     <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  //   </div>
  // );
};

export default ExploreContainer;
