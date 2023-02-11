import { Flex, Button, Box, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "hooks/users";

export default function Header({uid, date}) {
    const {user, isLoading} = useUser(uid);
    if (isLoading) return "loading"

    return(
        <Flex
        alignItems="center"
        borderBottom="2px solid"
        borderColor="blue.100"
        p="3"
        bg="gray.50"
        >

            <Avatar user={user} size="md"/>

            <Box ml="4">
                <Button
                    colorScheme="blue"
                    variant="link">
                        @{user.username}
                </Button>
                <Text fontSize="sm" color="gray.500">
                    {formatDistanceToNow(date)} ago
                </Text>
            </Box>


        </Flex>
    )
}