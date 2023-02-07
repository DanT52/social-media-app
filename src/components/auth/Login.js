import { Box, Center, FormLabel, Heading, Input, FormControl, FormErrorMessage, Button,
    Link, Text

} from "@chakra-ui/react";
import { REGISTER } from "lib/routes";
import { Link as RouterLink} from "react-router-dom";
import {useLogin} from "hooks/auth";
import { useForm } from "react-hook-form";
export default function Login() {
    const {login, isLoading} = useLogin();
    const {register} = useForm();



    return (
    <Center w="100%" h ="100vh">
        <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size="lg" textAlign="center">
                Log In right meow!
            </Heading>

            <form onSubmit={() => {}}>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="user@email.com"/>
                    <FormErrorMessage>This is an error message meow.</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password123"/>
                    <FormErrorMessage>This is an error message meow.</FormErrorMessage>

                </FormControl>

                <Button mt="4" type="submit" colorScheme="blue" size="md" w="full"
                 isLoading={true}
                 loadingText="Logging In"> 
                    Log In
                </Button>

            </form>
            <Text fontSize="xlg" align="center" mt="6">
                Make an account, {" "}

                <Link 
                as={RouterLink}
                to={REGISTER} 
                color="blue.900" 
                fontWeight="medium"
                textDecor="underline"
                _hover={{ background: "blue.100"}}

                >Register</Link>
                {" "} meow!

            </Text>

        </Box>
    </Center>
)}