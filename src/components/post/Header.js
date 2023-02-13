import { Flex, Button, Box, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import UsernameButton from "components/profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "hooks/users";

export default function Header({ post }) {
    const { uid, date } = post;
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
                <UsernameButton user={user} />
                <Text fontSize="sm" color="gray.500">
                    {formatDistanceToNow(date)} ago
                </Text>
            </Box>


        </Flex>
    )
}