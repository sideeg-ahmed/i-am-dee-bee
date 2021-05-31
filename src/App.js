import React from 'react';
import {
  VStack,
  Grid,
  GridItem,
  Flex,
  FormControl,
  FormLabel,
  Center,
  Input,
  Text,
  Image,
  FormHelperText,
  Box,
} from '@chakra-ui/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'', 
      title: '', 
      plot: '', 
      poster: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80', 
      year: '', 
      director: '', 
      genre: '' };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }  

  handleResponse(data){
    this.setState({
      title: data['Title'], 
      plot: data['Plot'], 
      poster: data['Poster'], 
      year: data['Year'], 
      director: data['Director'], 
      genre: data["Genre"] 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    

    fetch('https://www.omdbapi.com/?t='+this.state.input+'&apikey=91c8779b')
    .then(response => response.json())
    .then(data => {
      if (data["Response"] === "False"){
        alert("We can't find what you are looking for. Try checking your spelling.");
      }
      else {
        this.handleResponse(data);

    }
  } 
    )
  }

  render() {
    if (this.state.title === '') {
      return(
       
          <VStack spacing ="25px"> 
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <form onSubmit={this.handleSubmit}>
                <FormControl id="Movie Title" top = "30" >
                  <FormLabel align={'center'}>Enter the title you are looking for</FormLabel>
                  <Input type="text" onChange={this.handleChange}/>
                  <FormHelperText>Example: Bee movie</FormHelperText>
                </FormControl>
                </form>
                
              </Flex>

              
              <Center>
                <Box  p ={10} borderWidth="1px" borderRadius="lg">
                  <Image
                    alt={'poster'}
                    objectFit={'cover'}
                    src={this.state.poster}
                  />
                </Box>
              </Center>    
          </VStack>

      )
    } 
    
    else {
    return (
      <VStack spacing ="25px" >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <form onSubmit={this.handleSubmit} >
          <FormControl id="Movie Title" top = "30" >
            <FormLabel align={'center'}>Enter the title you are looking for</FormLabel>
            <Input type="text" onChange={this.handleChange} />
          </FormControl>
          </form>
          
        </Flex>

        
       
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box  p ={10} borderWidth="1px" borderRadius="lg">
            <VStack spacing ="25px"> 
              <Text fontSize="30px" color="#363636"  fontWeight="bold">
                {this.state.title}
              </Text>
              <Grid
                h="200px"
                templateRows="repeat(6, 1fr)"
                templateColumns="repeat(1, 1fr)"
                gap={4}
              >
                <GridItem >
                  <Text fontSize="30px" color="#363636">
                    Genre: {this.state.genre} 
                  </Text> 
                </GridItem>

                <GridItem >
                  <Text fontSize="30px" color="#363636" align = {"Left"}>
                    Year: {this.state.year} 
                  </Text>
                </GridItem>
                  <Text fontSize="30px" color="#363636">
                  Director: {this.state.director} 
                  </Text>
                <GridItem>
                  
                </GridItem> 
                
                <Text fontSize="30px" color="#363636">{this.state.plot} </Text> 
                
              </Grid>
              
           
            </VStack>
          
          </Box>
          <Center>
            <Box  p ={10} borderWidth="1px" borderRadius="lg">
              <Image
                alt={'poster'}
                objectFit={'cover'}
                src={this.state.poster}
              />
            </Box>
          </Center>    
          

        </Grid>
          
   
      </VStack> 
      
    );
  }
}}



export default App;