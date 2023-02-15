import { Button, Code, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"; 
import { PROTECTED } from "lib/routes";
import Avatar from "components/profile/Avatar";

export default function User({ user }) {
    const {id, username} = user;

    return(
        <VStack
          bg="gray.100"
          shardow="sm"
          rounded="md"
          textAlign="center"
          p="4"
          spacing="3"
        >
            <Avatar user={user}/>
            <Code>@{username}</Code>

            <Link>

                <Button
                    as={Link}
                    to={`${PROTECTED}/profile/${id}`}
                    size="sm"
                    variant="link"
                    colorScheme="blue"
                > Veiw Profile


                </Button>
            
            </Link>

        </VStack>
    )
}