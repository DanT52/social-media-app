import {Divider, Flex, HStack, Stack, Text, Button, useDisclosure } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { format } from "date-fns";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import { useParams } from "react-router-dom"
import Avatar from "./Avatar";
import EditProfile from "./EditProfile";

export default function Profile() {

    const {id} = useParams();
    const {posts, isLoading: postsLoading} = usePosts(id);
    const {user, isLoading: userLoading} = useUser(id);
    const {isOpen, onOpen, onClose} = useDisclosure();
    if (userLoading) return "loading..."

    return (
        <Stack spacing="5">
            <Flex p={["4", "6"]} pos="relative" align="center">
                <Avatar user={user} size="2xl"/>

                <Button 
                pos="absolute" 
                mb="2" 
                top="6" 
                right="6" 
                colorScheme="blue"
                onClick={onOpen}
                >
                    change avatar
                </Button>
                <Stack ml="10">
                    <Text fontSize="2xl">@{user.username}</Text>
                    <HStack spacing="10">
                        <Text color="gray.700" fontSize={["sm", "lg"]}>
                            Posts: {posts.length}
                        </Text>
                        <Text color="gray.700" fontSize={["sm", "lg"]}>
                            Joined: {format(user.date, "MMMM YYY")}
                        </Text>
                    </HStack>
                </Stack>
                <EditProfile isOpen={isOpen} onClose={onClose}/>
            </Flex>
            <Divider/>
            {postsLoading ? (<Text>Posts are Loading...</Text>
            ) : (
                <PostsLists posts={posts}/>
            )}
            
        </Stack>
    )
}